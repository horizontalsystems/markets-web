import React from 'react';
import PropTypes from 'prop-types'

class Tradingview extends React.Component {
  static propTypes = {
    symbol: PropTypes.string,
    datafeed: PropTypes.object,
    interval: PropTypes.string
  }

  static defaultProps = {
    interval: '30'
  }

  componentDidMount() {
    const { symbol, datafeed, interval } = this.props
    const widget = new window.TradingView.widget({
      symbol,
      datafeed,
      interval,
      container_id: 'chart',
      library_path: '/charting_library/',
      charts_storage_url: 'https://saveload.tradingview.com',
      charts_storage_api_version: '1.1',
      client_id: 'tradingview.com',
      user_id: 'public_user_id',
      autosize: true,
      theme: 'dark',
      enabled_features: [],
      disabled_features: [
        'header_symbol_search',
        'header_saveload',
        'header_compare',
        'header_indicators',
        'display_market_status',
        'go_to_date',
        //'timeframes_toolbar',
        'left_toolbar',
        'use_localstorage_for_settings'
      ],
      overrides: {
        'mainSeriesProperties.style': 3,
        // 'mainSeriesProperties.showCountdown': false,
        // 'paneProperties.background': '#131722',
        // 'paneProperties.vertGridProperties.color': '#363c4e',
        // 'paneProperties.horzGridProperties.color': '#363c4e',
        // 'symbolWatermarkProperties.transparency': 90,
        // 'scalesProperties.textColor': '#AAA',
        // 'mainSeriesProperties.candleStyle.wickUpColor': '#336854',
        // 'mainSeriesProperties.candleStyle.wickDownColor': '#7f323f',
      },
    });

    widget.onChartReady(() => {
    })
  }

  render() {
    return (
      <div
        id="chart"
        style={{ height: '500px' }}
      />
    );
  }
}

export default Tradingview
