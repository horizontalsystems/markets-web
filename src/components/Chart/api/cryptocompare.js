import axios from 'axios'

const baseUrl = 'https://min-api.cryptocompare.com'
const history = {}

const cryptocompare = {
  history: history,

  getBars: function (symbolInfo, resolution, from, to, first, limit) {
    const splitSymbol = symbolInfo.name.split(/[:/]/)
    const url = (resolution === '1D' || resolution === 'D') ? '/data/histoday' : resolution >= 60 ? '/data/histohour' : '/data/histominute'

    const params = {
      fsym: splitSymbol[0],
      tsym: splitSymbol[1],
      toTs: to ? to : '',
      limit: limit ? limit : 2000
    }

    return axios.get(`${baseUrl}${url}`, { params })
      .then(({ data }) => {
        if (data.Response === 'Error') {
          return []
        }

        if (data.TimeTo === data.TimeFrom) {
          return []
        }

        if (data.Data.length) {
          const bars = data.Data.map(item => ({
            time: item.time * 1000, // TradingView requires bar time in ms
            low: item.low,
            high: item.high,
            open: item.open,
            close: item.close,
            volume: item.volumefrom
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

export default cryptocompare
