import { getAllMarkets } from '../../api'

export const MARKETS_FETCHING = 'MARKETS_FETCHING'
export const MARKETS_FETCHED = 'MARKETS_FETCHED'

export const fetchMarkets = () => (dispatch, getState) => {
  if (getState().markets.fetching) {
    return
  }

  dispatch({ type: MARKETS_FETCHING })

  return getAllMarkets().then(([markets, marketsDefi]) => {
    dispatch({ type: MARKETS_FETCHED, markets, marketsDefi })
  })
}

const initialState = {
  fetching: false,
  coins: [],
  losers: [],
  gainers: [],
  gainersTvl: []
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case MARKETS_FETCHING: {
      return {
        ...state,
        fetching: true
      }
    }

    case MARKETS_FETCHED: {
      const coins = action.markets.slice()
      const coinsDefi = action.marketsDefi

      const sorted = coins.sort((a, b) =>
        b.price_change_percentage_24h - a.price_change_percentage_24h
      )

      const gainers = sorted.slice(0, 5)
      const losers = sorted.slice(sorted.length - 5)
        .sort((a, b) =>
          a.price_change_percentage_24h - b.price_change_percentage_24h
        )

      const gainersTvl = coinsDefi.sort((a, b) =>
        b.change_1d - a.change_1d
      ).slice(0,5)

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
