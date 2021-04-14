import axios from 'axios'

const coingeckoBaseUrl = `https://api.coingecko.com/api/v3/coins`

export function getMarketsGlobal() {
  return axios.get('https://markets.horizontalsystems.xyz/api/v1/markets/global/24h')
}

export function getMarkets(count = 100) {
  return getMarketsRecursive(1, Math.min(count, 250), count)
}

export function getMarketsByIds(ids) {
  return axios.get(`${coingeckoBaseUrl}/markets?vs_currency=USD&order=market_cap_desc&sparkline=false&price_change_percentage=24h,7d&&ids=${ids}`)
}

export function getDefiMarkets() {
  return axios.get('https://markets.horizontalsystems.xyz/api/v1/markets/defi')
}

export function getCoinInfo(id) {
  return axios.get(`${coingeckoBaseUrl}/${id}?localization=false&tickers=true&&sparkline=true`)
}

export function getAllMarkets() {
  return Promise.all([getMarkets(), getDefiMarkets()])
    .then(([markets, { data: defiMarkets }]) => {
      return [markets, defiMarkets]
    })
}

const getMarketsRecursive = async (page = 1, perPage = 250, count = 250) => {
  const { data } = await axios.get(`${coingeckoBaseUrl}/markets?vs_currency=USD&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false&price_change_percentage=24h,7d,14d,30d,200d,1y`)

  if (data.length < perPage || data.length >= count) {
    return data
  }

  return data.concat(await getMarketsRecursive(page + 1, count))
}

