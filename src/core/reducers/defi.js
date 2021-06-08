import { createSelector } from 'reselect'
import { getDefiCoins, getDefiMarkets } from '../../api'
import { normalizeCoins as normalizeMarkets } from './markets'

export const DEFI_COIN_FETCHED = 'DEFI_COIN_FETCHED'
export const DEFI_MARKET_FETCHED = 'DEFI_MARKET_FETCHED'

export const fetchDefiCoins = () => (dispatch, getState) => {
  if (getState().defi.coins.length) {
    return
  }

  return getDefiCoins().then(({ data }) => {
    dispatch({
      type: DEFI_COIN_FETCHED,
      data: normalizeCoins(data)
    })
  })
}

export const fetchDefiMarkets = () => (dispatch, getState) => {
  if (getState().defi.markets.length) {
    return
  }

  return getDefiMarkets().then(({ data }) => {
    dispatch({
      type: DEFI_MARKET_FETCHED,
      data: normalizeMarkets(data)
    })
  })
}

const initialState = {
  coins: [],
  markets: [],
  chains: []
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case DEFI_COIN_FETCHED: {
      return {
        ...state,
        coins: action.data.coins,
        chains: action.data.chains
      }
    }

    case DEFI_MARKET_FETCHED: {
      return {
        ...state,
        markets: action.data
      }
    }

    default:
      return state
  }
}

export const selectDefiCoins = createSelector(
  state => state.defi.coins,
  coins => {
    return coins.slice().sort((a, b) => b.priceChange24h - a.priceChange24h)
  }
)

export const selectDefiTvlDominance = createSelector(
  coins => coins,
  (_, tvl) => tvl,
  (coins, value) => {
    const coin = coins[0]
    if (!coin || !value) {
      return {
        name: '',
        value: 0
      }
    }

    return {
      name: coin.name,
      value: coin.tvl * 100 / value
    }
  }
)

export const selectDefiMarketDominance = createSelector(
  coins => coins,
  (_, tvl) => tvl,
  (coins, value) => {
    const coin = coins[0]
    if (!coin || !value) {
      return {
        name: '',
        value: 0
      }
    }

    return {
      name: coin.name,
      value: coin.marketCap * 100 / value
    }
  }
)

export const selectDefiCoins5 = createSelector(
  selectDefiCoins, coins => coins.slice(0, 5)
)

// Normalizer

function normalizeCoins(markets) {
  const coins = []
  const chains = {}
  const multiChain = 'Multi-Chain'

  const marketsSorted = markets.sort((a, b) => b.tvl - a.tvl)

  for (let i = 0; i < marketsSorted.length; i++) {
    const item = marketsSorted[i];
    const coin = {
      id: item.coingecko_id,
      name: item.name,
      image: item.image_url,
      symbol: normalizeSymbol(item),
      rank: item.id,
      rankTvl: i + 1,
      priceChange1h: item.change_1h,
      priceChange24h: item.tvl_diff_24h,
      priceChange7d: item.tvl_diff_7d,
      tvl: item.tvl,
      chains: item.chains
    }

    const chain = item.chains.length > 1 ? multiChain : item.chains[0]
    if (chain) {
      coin.chain = chain
      chains[chain] = true
    }

    coins.push(coin)
  }

  return {
    coins,
    chains: Object.keys(chains)
  }
}

function normalizeSymbol(item) {
  if (item.code === '-') {
    return item.name
  }

  return item.code || item.name || item.coingecko_id
}
