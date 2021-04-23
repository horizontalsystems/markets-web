import axios from 'axios'

const baseUrl = 'https://api.coingecko.com/api/v3/coins'
const history = {}

const coingecko = {
  history: history,

  getBars: function (coinId, resolution, from, to, first) {
    return axios.get(`${baseUrl}/${coinId}/market_chart/range?vs_currency=usd&from=${from}&to=${to}`)
      .then(({ data }) => {
        if (data && data.prices) {
          const bars = data.prices.map(([time, open = 0, high = 0, low = 0, close = 0]) => ({
            time,
            low: open,
            high: open,
            open: open,
            close: open
          }))

          if (first) {
            history[coinId] = {
              lastBar: bars[bars.length - 1]
            }
          }

          return bars
        } else {
          return []
        }
      })
  },

  getBarsOHLC: function (symbolInfo, resolution, from, to, first) {
    if (!first) {
      return []
    }

    return axios.get(`${baseUrl}/${symbolInfo.name}/ohlc?vs_currency=usd&days=1`).then(({ data }) => {
      if (data && data.length) {
        const bars = data.map(([time, open, high, low, close]) => ({
          time,
          low,
          high,
          open,
          close
        }))

        if (first) {
          history[symbolInfo.name] = {
            lastBar: bars[bars.length - 1]
          }
        }

        return bars
      } else {
        return []
      }
    })
  }
}

export default coingecko
