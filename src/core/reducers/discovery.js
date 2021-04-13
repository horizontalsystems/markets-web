import { getMarkets, getMarketsByIds } from '../../api'
import { createSelector } from 'reselect'
import { normalizeCoins } from './markets'

import coinsStore from '../coins-store'

export const DISCOVERY_MARKETS_FETCHED = 'DISCOVERY_MARKETS_FETCHED'

export const FILTERS_SET = 'FILTERS_SET'
export const FILTERS_CLEAR = 'FILTERS_CLEAR'
export const FILTERS_COIN_FETCHING = 'FILTERS_COIN_FETCHING'
export const FILTERS_COIN_FETCHED = 'FILTERS_COIN_FETCHED'

export const fetchDiscoveryMarkets = () => (dispatch, getState) => {
  if (getState().discovery.coinsMap) {
    return
  }

  return getMarketsByIds(Object.keys(coinsStore.coins).join(','))
    .then(({ data }) =>
      dispatch({
        type: DISCOVERY_MARKETS_FETCHED,
        data: normalizeMarketCategories(data)
      })
    )
}

export const fetchFilteredCoins = () => (dispatch, getState) => {
  const { coins, filters, filtersCoinFetching } = getState().discovery
  const count = filters.top.value || 250

  if (filtersCoinFetching || coins.length >= count) {
    return
  }

  dispatch({ type: FILTERS_COIN_FETCHING })

  getMarkets(count).then(data => {
    dispatch({
      type: FILTERS_COIN_FETCHED,
      payload: normalizeCoins(data)
    })
  })
}

export const setFilters = newFilter => (dispatch, getState) => {
  const filters = getState().discovery.filters
  const payload = {
    ...filters,
    ...newFilter
  }

  dispatch(fetchFilteredCoins(payload))
  dispatch({ type: FILTERS_SET, payload })
}

export const clearFilters = () => ({
  type: FILTERS_CLEAR
})

export const filtersOptions = {
  top: [
    { value: 100, label: 'Top 100' },
    { value: 250, label: 'Top 250' },
    { value: 500, label: 'Top 500' },
    { value: 1000, label: 'Top 1000' },
    { value: 1500, label: 'Top 1500' }
  ],
  volumes: [
    { value: '<5M', label: '< 5M' },
    { value: '5M-20M', label: '5M-20M' },
    { value: '20M-100M', label: '20M-100M' },
    { value: '100M-1B', label: '100M-1B' },
    { value: '1B-5B', label: '1B-5B' },
    { value: '>5B', label: '> 5B' }
  ],
  marketCap: [
    { value: '<5M', label: '< 5M' },
    { value: '5M-20M', label: '5M-20M' },
    { value: '20M-100M', label: '20M-100M' },
    { value: '100M-1B', label: '100M-1B' },
    { value: '1B-5B', label: '1B-5B' },
    { value: '>5B', label: '> 5B' }
  ],
  priceChange: [
    { value: 10, label: '> 10%' },
    { value: 25, label: '> 25%' },
    { value: 50, label: '> 50%' },
    { value: 100, label: '> 100%' },
    { value: -10, label: '< -10%' },
    { value: -25, label: '< -25%' },
    { value: -50, label: '< -50%' },
    { value: -100, label: '< -100%' }
  ],
  pricePeriod: [
    { value: '1 Day', label: '1 Day' },
    { value: '1 Week', label: '1 Week' },
    { value: '2 Weeks', label: '2 Weeks' },
    { value: '1 Month', label: '1 Month' },
    { value: '6 Months', label: '6 Months' },
    { value: '1 Year', label: '1 Year' }
  ]
}

const initialState = {
  coins: [],
  coinsMap: null,
  filters: {
    top: filtersOptions.top[1],
    marketCap: { label: 'Market Cap' },
    volumes: { label: 'Volume' },
    priceChange: { label: 'Price Change' },
    pricePeriod: { label: 'Price Period' },
  }
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case DISCOVERY_MARKETS_FETCHED: {
      return {
        ...state,
        coinsMap: action.data
      }
    }

    case FILTERS_COIN_FETCHING: {
      return {
        ...state,
        filtersCoinFetching: true
      }
    }

    case FILTERS_COIN_FETCHED: {
      return {
        ...state,
        filtersCoinFetching: false,
        coins: action.payload
      }
    }

    case FILTERS_SET: {
      return {
        ...state,
        filters: action.payload
      }
    }

    case FILTERS_CLEAR: {
      return {
        ...state,
        filters: initialState.filters
      }
    }

    default:
      return state
  }
}

export const selectFilteredCoins = createSelector(
  state => state.discovery.filters,
  state => state.discovery.coins,
  (filters, coins) => {
    let list = coins.slice(0, filters.top.value)
    list = filterByVolume(filters.volumes.value, list, 'totalVolume')
    list = filterByVolume(filters.marketCap.value, list, 'marketCap')
    list = filterByPrice(filters, list)

    return list
  }
)

export const selectCategoryCoins = createSelector(
  state => state.discovery.coinsMap,
  (_, category) => category,
  (coinsMap, category) => {
    const categoryCoins = coinsStore.categoryCoins[category]
    if (!categoryCoins || !coinsMap) {
      return []
    }

    return categoryCoins.map(coin => coinsMap[coin.coingeckoId]).filter(item => item != null)
  }
)

// Normalizer

function normalizeMarketCategories(markets) {
  return normalizeCoins(markets).reduce((acc, curr) => {
    acc[curr.id] = curr
    return acc
  }, {})
}

function filterByVolume(value, list, field = 'totalVolume') {
  switch (value) {
    case '<5M':
      return list.filter(coin => coin[field] <= 5_000_000)
    case '5M-20M':
      return list.filter(coin => coin[field] >= 5_000_000 && coin[field] <= 20_000_000)
    case '20M-100M':
      return list.filter(coin => coin[field] >= 20_000_000 && coin[field] <= 100_000_000)
    case '100M-1B':
      return list.filter(coin => coin[field] >= 100_000_000 && coin[field] <= 1_000_000_000)
    case '1B-5B':
      return list.filter(coin => coin[field] >= 1_000_000_000 && coin[field] <= 5_000_000_000)
    case '>5B':
      return list.filter(coin => coin[field] >= 5_000_000_000)
    default:
      return list
  }
}

function filterByPrice({ priceChange, pricePeriod }, list) {
  if (!pricePeriod.value) {
    return list
  }

  let field
  if (pricePeriod.value === '1 Day')
    field = 'priceChange24h'
  else if (pricePeriod.value === '1 Week')
    field = 'priceChange7d'
  else if (pricePeriod.value === '2 Weeks')
    field = 'priceChange14d'
  else if (pricePeriod.value === '1 Month')
    field = 'priceChange30d'
  else if (pricePeriod.value === '6 Months')
    field = 'priceChange200d'
  else if (pricePeriod.value === '1 Year')
    field = 'priceChange1y'
  else return list

  switch (priceChange.value) {
    case 10:
    case 25:
    case 50:
    case 100: {
      return list.filter(coin => coin[field] >= priceChange.value).sort((a, b) => b[field] - a[field])
    }
    case -10:
    case -25:
    case -50:
    case -100: {
      return list.filter(coin => coin[field] <= priceChange.value).sort((a, b) => a[field] - b[field])
    }
    default:
      return list
  }
}
