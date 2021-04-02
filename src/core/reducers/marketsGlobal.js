import { getMarketsGlobal } from '../../api'
import { normalizeMarketData } from './normalizers'

export const MARKETS_GLOBAL_FETCHING = 'MARKETS_GLOBAL_FETCHING'
export const MARKETS_GLOBAL_FETCHED = 'MARKETS_GLOBAL_FETCHED'

export const fetchMarketsGlobal = () => (dispatch, getState) => {
  if (getState().marketsGlobal.fetching) {
    return
  }

  dispatch({ type: MARKETS_GLOBAL_FETCHING })

  return getMarketsGlobal()
    .then(({ data }) => {
      dispatch({ type: MARKETS_GLOBAL_FETCHED, data: normalizeMarketData(data) })
    })
}

const initialState = {
  fetching: false,
  markets: [],
  points: {}
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case MARKETS_GLOBAL_FETCHING: {
      return {
        ...state,
        fetching: true
      }
    }

    case MARKETS_GLOBAL_FETCHED: {
      return action.data
    }

    default:
      return state
  }
}
