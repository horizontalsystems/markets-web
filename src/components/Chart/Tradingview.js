import React from 'react';
import PropTypes from 'prop-types'

class Tradingview extends React.Component {
  static propTypes = {
    symbol: PropTypes.string,
    datafeed: PropTypes.object
  }

  componentDidMount() {
    const widget = new window.TradingView.widget({
      symbol: this.props.symbol,
      datafeed: this.props.datafeed,
      interval: '30',
      container_id: 'chart',
      library_path: '/charting_library/',
      charts_storage_url: 'https://saveload.tradingview.com',
      charts_storage_api_version: '1.1',
      client_id: 'tradingview.com',
      user_id: 'public_user_id',
      autosize: true,
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
        'mainSeriesProperties.showCountdown': false,
        'mainSeriesProperties.style': 3,
        'paneProperties.background': '#131722',
        'paneProperties.vertGridProperties.color': '#363c4e',
        'paneProperties.horzGridProperties.color': '#363c4e',
        'symbolWatermarkProperties.transparency': 90,
        'scalesProperties.textColor': '#AAA',
        'mainSeriesProperties.candleStyle.wickUpColor': '#336854',
        'mainSeriesProperties.candleStyle.wickDownColor': '#7f323f',
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
