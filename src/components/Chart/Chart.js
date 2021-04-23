import React from 'react'
import PropTypes from 'prop-types'
import HistoryProvider from './api/HistoryProvider'
import Tradingview from './Tradingview'

class Chart extends React.Component {
  static propTypes = {
    coin: PropTypes.string,
    coinId: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.historyProvider = new HistoryProvider(props.coinId)
  }

  onReady = callback => {
    setTimeout(() => callback({
      supported_resolutions: ['1', '5', '15', '30', '60', '240', 'D'],
    }), 0)
  }

  resolveSymbol = (symbolName, onSymbolResolvedCallback, onResolveErrorCallback) => {
    setTimeout(() => onSymbolResolvedCallback({
        name: symbolName,
        type: 'crypto',
        session: '24x7',
        timezone: 'UTC',
        ticker: symbolName,
        minmov: 1,
        pricescale: 100,
        has_intraday: true,
        intraday_multipliers: ['1', '60'],
        chartTypes: ["Area", "Line"],
        volume_precision: 8,
        data_status: 'streaming',
      }
    ), 0)
  }

  getBars = (symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, firstDataRequest) => {
    return this.historyProvider.getBars(symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, firstDataRequest)
  }

  calculateHistoryDepth = (resolution, resolutionBack, intervalBack) => {
    return resolution < 60 ? { resolutionBack: 'D', intervalBack: '1' } : undefined
  }

  render() {
    const { coin } = this.props
    const datafeed = {
      onReady: this.onReady,
      resolveSymbol: this.resolveSymbol,
      getBars: this.getBars,
      calculateHistoryDepth: this.calculateHistoryDepth,
      subscribeBars: () => {
      },
      unsubscribeBars: () => {
      }
    }

    return <Tradingview symbol={`${coin}/usd`} datafeed={datafeed} />
  }
}

export default Chart
