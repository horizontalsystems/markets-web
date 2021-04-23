import { createSelector } from 'reselect'
import { getDefiMarkets } from '../../api'

export const DEFI_MARKETS_FETCHED = 'DEFI_MARKETS_FETCHED'

export const fetchDefiMarkets = () => (dispatch, getState) => {
  if (getState().defi.coins.length) {
    return
  }

  return getDefiMarkets().then(({ data }) => {
    dispatch({
      type: DEFI_MARKETS_FETCHED,
      data: normalizeCoins(data)
    })
  })
}

const initialState = {
  coins: [],
  chains: []
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case DEFI_MARKETS_FETCHED: {
      return {
        coins: action.data.coins,
        chains: action.data.chains
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

export const selectDefiCoins5 = createSelector(
  selectDefiCoins, coins => coins.slice(0, 5)
)

// Normalizer

function normalizeCoins(markets) {
  const coins = []
  const chains = {}

  for (let i = 0; i < markets.length; i++) {
    const item = markets[i];
    coins.push({
      id: item.gecko_id,
      name: item.name,
      image: item.logo,
      symbol: item.symbol === '-' ? item.name : item.symbol,
      rank: item.id,
      priceChange1h: item.change_1h,
      priceChange24h: item.change_1d,
      priceChange7d: item.change_7d,
      tvl: item.tvl,
      chain: item.chain
    })

    chains[item.chain] = true
  }

  return {
    coins,
    chains: Object.keys(chains)
  }
}
