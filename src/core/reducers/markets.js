import { getAllMarkets } from '../../api'
import { createSelector } from 'reselect'

export const MARKETS_FETCHED = 'MARKETS_FETCHED'

export const fetchMarkets = () => (dispatch, getState) => {
  if (getState().markets.coins.length) {
    return
  }

  return getAllMarkets().then(([markets, marketsDefi]) => {
    dispatch({
      type: MARKETS_FETCHED,
      markets: normalizeCoins(markets),
      marketsDefi: normalizeDeFi(marketsDefi)
    })
  })
}

const initialState = {
  coins: [],
  losers: [],
  gainers: [],
  gainersTvl: []
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case MARKETS_FETCHED: {
      const coins = action.markets.slice()
      const coinsDefi = action.marketsDefi

      const sorted = coins.sort((a, b) =>
        b.priceChange24h - a.priceChange24h
      )

      const gainers = sorted.slice(0, 5)
      const losers = sorted.slice(sorted.length - 5)
        .sort((a, b) =>
          a.priceChange24h - b.priceChange24h
        )

      const gainersTvl = coinsDefi.sort((a, b) =>
        b.change1d - a.change1d
      ).slice(0, 5)

      return {
        coins: action.markets,
        losers,
        gainers,
        gainersTvl,
        fetching: false
      }
    }

    default:
      return state
  }
}

export const selectMarketsCoins = createSelector(
  state => state.markets.coins,
  (_, category) => category,
  (coins, category) => {
    if (category) {
      return []
    }

    return coins
  }
)

// Normalizer

export function normalizeCoins(markets) {
  return markets.map(item => ({
    id: item.id,
    name: item.name,
    image: item.image,
    symbol: item.symbol,
    rank: item.market_cap_rank,
    price: item.current_price,
    priceChange24h: item.price_change_percentage_24h,
    priceChange7d: item.price_change_percentage_7d_in_currency,
    priceChange14d: item.price_change_percentage_14d_in_currency,
    priceChange30d: item.price_change_percentage_30d_in_currency,
    priceChange200d: item.price_change_percentage_200d_in_currency,
    priceChange1y: item.price_change_percentage_1y_in_currency,
    marketCap: item.market_cap,
    totalVolume: item.total_volume,
  }))
}

function normalizeDeFi(markets) {
  return markets.map(item => ({
    symbol: item.symbol === '-' ? item.name : item.symbol,
    id: item.gecko_id,
    tvl: item.tvl,
    logo: item.logo,
    change1d: item.change_1d
  }))
}
