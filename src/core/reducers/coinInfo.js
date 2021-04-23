import { getCoinInfo } from '../../api'
import { percentageBetweenRange } from '../helpers'

import coinsStore from '../coins-store'

export const COINS_FETCHING = 'COINS_FETCHING'
export const COINS_FETCHED = 'COINS_FETCHED'

export const fetchCoinInfo = id => (dispatch, getState) => {
  // dispatch({ type: COINS_FETCHING })

  return getCoinInfo(id).then(({ data }) => {
    dispatch({
      id,
      type: COINS_FETCHED,
      data: normalize(data, coinsStore.coins[id])
    })
  })
}

const initialState = {
  map: {}
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case COINS_FETCHING: {
      return state
    }

    case COINS_FETCHED: {
      const map = {
        ...state.map,
        [action.id]: action.data
      }

      return { ...state, map }
    }

    default:
      return state
  }
}

// Helpers / Normalizers

function normalize(coin, storedCoin) {
  const marketData = coin.market_data
  const mergedCoin = {
    id: coin.id,
    name: coin.name,
    symbol: coin.symbol,
    image: coin.image.large,
    rank: coin.coingecko_rank,
    description: coin.description.en,
    price: marketData.current_price.usd,
    priceChange24: marketData.price_change_percentage_24h,

    markets: normalizeMarkets(coin.tickers),
    performance: normalizePerformance(coin.market_data),
    priceRanges: normalizePriceRange(coin.market_data),
    volumes: normalizeVolumes(coin.market_data)
  }

  return mergeStoredData(mergedCoin, storedCoin)
}

function mergeStoredData(coin, storedCoin) {
  if (!storedCoin) {
    return coin
  }

  coin.links = storedCoin.links
  coin.categories = storedCoin.categories
  coin.platform = storedCoin.platform
  coin.guide = storedCoin.guide
  coin.whitepaper = storedCoin.whitepaper
  coin.funds = storedCoin.funds.map(fund => coinsStore.funds[fund])

  if (storedCoin.description) {
    coin.description = storedCoin.description
  }

  return coin
}

function normalizeMarkets(tickers) {
  return tickers.map(
    item => ({
      name: item.market.name,
      pair: `${item.base}/${item.target}`,
      price: item.converted_last.usd,
      volume: item.converted_volume.usd
    })
  ).sort((a, b) =>
    b.volume - a.volume
  )
}

function normalizeVolumes(marketData) {
  return {
    totalVolume: marketData.total_volume.usd,
    totalSupply: marketData.total_supply,
    circulatingSupply: marketData.circulating_supply,
    marketCap: marketData.market_cap.usd,
    dilutedValuation: marketData.fully_diluted_valuation.usd
  }
}

function normalizePerformance(marketData) {
  const performance = []
  const performanceCoins = ['usd', 'eth', 'btc']
  const performancePeriods = [
    { name: '1w', key: 'price_change_percentage_7d_in_currency' },
    { name: '1m', key: 'price_change_percentage_30d_in_currency' }
  ]

  performanceCoins.forEach(code => {
    const perf = { code }
    performancePeriods.forEach(period => {
      const data = marketData[period.key]
      if (data && data[code]) {
        perf[period.name] = data[code]
      }
    })

    performance.push(perf)
  })

  return performance
}

function normalizePriceRange(marketData) {
  const range24h = {
    type: '24h Range',
    min: marketData.low_24h.usd,
    max: marketData.high_24h.usd
  }

  const range7d = {
    type: '7d Range',
    min: Math.min(...marketData.sparkline_7d.price),
    max: Math.max(...marketData.sparkline_7d.price)
  }

  const rangeAll = {
    type: 'All Time',
    min: marketData.atl.usd,
    max: marketData.ath.usd
  }

  return [range24h, range7d, rangeAll].map(item => {
    item.value = percentageBetweenRange(marketData.current_price.usd, item.min, item.max)
    return item
  })
}
