import coingecko from './coingecko'
import cryptocompare from './cryptocompare'

class HistoryProvider {

  constructor(coinId) {
    this.coinId = coinId
    this.fromCoingecko = false
  }

  async getBars(symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, first) {
    if (this.fromCoingecko) {
      this.fetchCoingecko(symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, first)
    } else {
      this.fetchCryptocompare(symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, first)
    }
  }

  fetchCoingecko(symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, first) {
    coingecko.getBars(this.coinId, resolution, from, to, first)
      .then(bars => {
        if (bars.length) {
          onHistoryCallback(bars, { noData: false })
        } else {
          onHistoryCallback(bars, { noData: true })
        }
      })
      .catch(err => {
        onErrorCallback(err)
      })
  }

  fetchCryptocompare(symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, first) {
    cryptocompare.getBars(symbolInfo, resolution, from, to, first)
      .then(bars => {
        if (bars.length) {
          this.fromCoingecko = false
          onHistoryCallback(bars, { noData: false })
        } else if (first) {
          this.fromCoingecko = true
          this.fetchCoingecko(symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, first)
        } else {
          onHistoryCallback(bars, { noData: true })
        }
      })
      .catch(err => {
        if (first) {
          this.fromCoingecko = true
          this.fetchCoingecko(symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, first)
        } else {
          onErrorCallback(err)
        }
      })
  }
}

export default HistoryProvider
