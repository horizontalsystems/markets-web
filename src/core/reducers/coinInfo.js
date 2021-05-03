import { getCoinInfo } from '../../api'
import { percentageBetweenRange, truncateMiddle } from '../helpers'

import coinsStore from '../coins-store'
import { createSelector } from 'reselect'

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

export const selectCoin = createSelector(
  state => state.coinInfo.map,
  state => state.markets.coins,
  state => state.defi.coins,
  (_, coin) => coin,
  (map, coins, defi, coinId) => {
    let coin = map[coinId]
    if (coin) {
      return coin
    }

    coin = coins.find(item => item.id === coinId)

    if (!coin) {
      coin = defi.find(item => item.id === coinId)
    }

    return {
      ...coin,
      markets: [],
      performance: [],
      priceRanges: [],
      volumes: {}
    }
  }
)

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
    platforms: coin.platforms,
    priceChange24: marketData.price_change_percentage_24h,

    links: normalizeLinks(coin.links),
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

  // Merge only existing links
  Object.keys(storedCoin.links).forEach(key => {
    const link = storedCoin.links[key]
    if (link) {
      coin.links[key] = link
    }
  })

  coin.categories = storedCoin.categories
  coin.guide = storedCoin.guide
  coin.whitepaper = storedCoin.whitepaper
  coin.funds = storedCoin.funds.map(fund => coinsStore.funds[fund])

  if (storedCoin.description) {
    coin.description = storedCoin.description
  }

  return coin
}

function normalizeLinks(links) {
  const map = {
    reddit: links.subreddit_url
  }

  if (links.telegram_channel_identifier) {
    map.telegram = `https://t.me/${links.telegram_channel_identifier}`
  }

  if (links.twitter_screen_name) {
    map.telegram = `https://twitter.com/${links.twitter_screen_name}`
  }

  if (links.homepage && links.homepage.length) {
    map.website = links.homepage[0]
  }

  if (links.repos_url) {
    if (links.repos_url.github && links.repos_url.github.length) {
      map.github = links.homepage[0]
    }

    if (links.repos_url.bitbucket && links.repos_url.bitbucket.length) {
      map.bitbucket = links.homepage[0]
    }
  }

  return map
}

function normalizeMarkets(tickers) {
  return tickers.map(
    item => {
      return ({
        name: item.market.name,
        pair: `${truncateMiddle(item.base, 15)}/${item.target}`,
        price: item.converted_last.usd,
        volume: item.converted_volume.usd
      })
    }
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
  const performanceCoins = ['usd', 'eth', 'btc', 'bnb']
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
