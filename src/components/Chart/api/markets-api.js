import { getCoinTvlChart } from '../../../api'

const history = {}

const marketsApi = {
  history: history,

  getBars: function (coinId, resolution, from, to, first) {
    if (!first) {
      return new Promise(resolve => resolve([]))
    }

    return getCoinTvlChart(coinId)
      .then(({ data }) => {
        if (data.length) {
          const bars = data.map(({ date, tvl: open }) => ({
            time: date * 1000,
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
  }
}

export default marketsApi
