import { getMarketsGlobal } from '../../api'

export const MARKETS_GLOBAL_FETCHING = 'MARKETS_GLOBAL_FETCHING'
export const MARKETS_GLOBAL_FETCHED = 'MARKETS_GLOBAL_FETCHED'

export const fetchMarketsGlobal = () => (dispatch, getState) => {
  if (getState().marketsGlobal.fetching) {
    return
  }

  dispatch({ type: MARKETS_GLOBAL_FETCHING })

  return getMarketsGlobal()
    .then(({ data }) => {
      dispatch({ type: MARKETS_GLOBAL_FETCHED, data: normalize(data) })
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

// Normalizer

function normalize(data) {
  if (!data || !data.length) {
    return {
      markets: [],
      points: {}
    }
  }

  const latest = data[0]
  const data24 = data[data.length - 1]
  const sorted = data.sort((a, b) => a.timestamp - b.timestamp)
  const change = (from, to) => (from - to) * 100 / to
  const points = {
    volume: [],
    dominance: [],
    defiMarket: [],
    tvl: []
  }

  for (let i = 0; i < sorted.length; i++) {
    const item = sorted[i]
    const time = parseInt(item.timestamp)

    points.volume.push({ time, value: item.volume24h })
    points.dominance.push({ time, value: item.dominance_btc })
    points.defiMarket.push({ time, value: item.market_cap_defi })
    points.tvl.push({ time, value: item.tvl })
  }

  return {
    points,
    marketCap: latest.market_cap,
    marketCapDefi: latest.market_cap_defi,
    volume24h: latest.volume24h,
    dominanceBTC: latest.dominance_btc,
    totalValueLocked: latest.tvl,
    marketCapDiff24h: change(latest.market_cap, data24.market_cap),
    marketCapDefiDiff24h: change(latest.market_cap_defi, data24.market_cap_defi),
    dominanceBTCDiff24h: change(latest.dominance_btc, data24.dominance_btc),
    volume24hDiff: change(latest.volume24h, data24.volume24h),
    totalValueLockedDiff24h: change(latest.tvl, data24.tvl)
  }
}
