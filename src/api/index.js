import axios from 'axios'

const coingeckoBaseUrl = `https://api.coingecko.com/api/v3/coins`
const marketsBaseUrl = 'https://markets.horizontalsystems.xyz/api/v1'

export function getMarketsGlobal() {
  return axios.get(`${marketsBaseUrl}/markets/global/24h`)
}

export function getMarkets(count = 100) {
  return getMarketsRecursive(1, Math.min(count, 250), count)
}

export function getMarketsByIds(ids) {
  return axios.get(`${coingeckoBaseUrl}/markets?vs_currency=USD&order=market_cap_desc&sparkline=false&price_change_percentage=24h,7d,14d,30d,200d,1y&ids=${ids}`)
}

export function getDefiCoins() {
  return axios.get(`${marketsBaseUrl}/markets/defi?diff_period=24h,7d,30d`)
}

export function getDefiMarkets() {
  return axios.get(`${coingeckoBaseUrl}/markets?vs_currency=USD&order=market_cap_desc&sparkline=false&price_change_percentage=24h,7d,14d,30d,200d,1y&category=decentralized_finance_defi`)
}

export function getCoinInfo(id) {
  return axios.get(`${coingeckoBaseUrl}/${id}?localization=false&tickers=true&&sparkline=true`)
}

export function getNews() {
  return axios.get('https://min-api.cryptocompare.com/data/v2/news/?feeds=cointelegraph,theblock,decrypt&extraParams=Blocksdecoded&excludeCategories=Sponsored')
}

const getMarketsRecursive = async (page = 1, perPage = 250, count = 250) => {
  const { data } = await axios.get(`${coingeckoBaseUrl}/markets?vs_currency=USD&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false&price_change_percentage=24h,7d,14d,30d,200d,1y`)

  if (data.length < perPage || data.length >= count) {
    return data
  }

  return data.concat(await getMarketsRecursive(page + 1, count))
}

