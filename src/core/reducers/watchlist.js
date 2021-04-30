import { createSelector } from 'reselect'
import { getMarketsByIds } from '../../api'
import { normalizeCoins } from './markets'

export const WATCHLIST_FETCHING = 'WATCHLIST_FETCHING'
export const WATCHLIST_FETCHED = 'WATCHLIST_FETCHED'
export const WATCHLIST_ADD = 'WATCHLIST_ADD'
export const WATCHLIST_REMOVE = 'WATCHLIST_REMOVE'

export const fetchWatchlist = () => (dispatch, getState) => {
  const { coins, coinsMap } = getState().watchlist
  const coinsIds = Object.keys(coinsMap)
  const coinExists = coinId => coins.find(item => item.id === coinId)

  if (coinsIds.length <= 0) {
    return
  }

  if (coinsIds.every(coinExists)) {
    return
  }

  dispatch({ type: WATCHLIST_FETCHING })

  return getMarketsByIds(coinsIds)
    .then(({ data }) =>
      dispatch({
        type: WATCHLIST_FETCHED,
        coins: normalizeCoins(data)
      })
    )
}

const initialState = {
  coins: [],
  coinsMap: JSON.parse(localStorage.getItem('watchlist')) || {}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case WATCHLIST_FETCHING: {
      return {
        ...state,
        fetching: true
      }
    }

    case WATCHLIST_FETCHED: {
      return {
        ...state,
        fetching: false,
        coins: action.coins
      }
    }

    case WATCHLIST_ADD: {
      return {
        ...state,
        coinsMap: action.data
      }
    }

    case WATCHLIST_REMOVE: {
      return {
        ...state,
        coinsMap: action.data
      }
    }

    default:
      return state
  }
}

export const watch = coin => (dispatch, getState) => {
  const { coinsMap } = getState().watchlist

  if (coinsMap[coin]) {
    dispatch(removeFromWatchlist(coin))
  } else {
    dispatch(addToWatchlist(coin))
  }
}

export const addToWatchlist = coin => (dispatch, getState) => {
  const watchlist = getState().watchlist
  const coinsMap = {
    ...watchlist.coinsMap,
    [coin]: true
  }

  localStorage.setItem('watchlist', JSON.stringify(coinsMap))

  dispatch({
    type: WATCHLIST_ADD,
    data: coinsMap
  })
}

export const removeFromWatchlist = coin => (dispatch, getState) => {
  const watchlist = getState().watchlist
  const {
    [coin]: removed,
    ...coinsMap
  } = watchlist.coinsMap

  localStorage.setItem('watchlist', JSON.stringify(coinsMap))

  dispatch({
    type: WATCHLIST_REMOVE,
    data: coinsMap
  })
}
export const selectWatchlist = createSelector(
  state => state.watchlist,
  ({ coins, fetching, coinsMap }) => {
    return {
      coins: coins.filter(coin => coinsMap[coin.id]),
      isFetching: fetching
    }
  }
)
