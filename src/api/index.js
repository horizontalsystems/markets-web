import axios from 'axios'

export function getMarketsGlobal() {
  return axios.get('https://markets.horizontalsystems.xyz/api/v1/markets/global/24h')
}

export function getMarkets() {
  return axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h,7d')
}

export function getCoinInfo(id) {
  return axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=true&&sparkline=true`)
}

export function getDefiMarkets() {
  return axios.get('https://api.defillama.com/protocols')
}

export function getAllMarkets() {
  return Promise.all([getMarkets(), getDefiMarkets()])
    .then(([{ data: markets }, { data: defiMarkets }]) => {
      return [markets, defiMarkets]
    })
}
