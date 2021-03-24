import React from 'react'
import PropTypes from 'prop-types'

import { createChart } from 'lightweight-charts'

class ChartSmall extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  componentDidMount() {
    const chart = createChart(this.ref, {
      width: 120,
      height: 36,
      handleScale: false,
      handleScroll: false,
      layout: {
        backgroundColor: 'transparent'
      },
      rightPriceScale: {
        visible: false
      },
      timeScale: {
        // barSpacing: 14,
        visible: false
      },
      grid: {
        vertLines: {
          visible: false,
        },
        horzLines: {
          visible: false,
        }
      }
    })

    const lineSeries = chart.addAreaSeries({
      topColor: 'rgba(33, 150, 243, 0.56)',
      bottomColor: 'rgba(33, 150, 243, 0.04)',
      lineColor: 'rgba(33, 150, 243, 1)',
      lineWidth: 1
    })

    lineSeries.setData([
      { time: '2019-05-08', value: 42.55 },
      { time: '2019-05-09', value: 42.92 },
      { time: '2019-05-10', value: 43.15 },
      { time: '2019-05-13', value: 42.28 },
      { time: '2019-05-14', value: 42.91 },
      { time: '2019-05-15', value: 42.49 },
      { time: '2019-05-16', value: 43.19 },
      { time: '2019-05-17', value: 43.54 },
      { time: '2019-05-20', value: 42.78 },
      { time: '2019-05-21', value: 43.29 },
      { time: '2019-05-22', value: 43.30 },
      { time: '2019-05-23', value: 42.73 },
      { time: '2019-05-24', value: 42.67 }
    ])
  }

  render() {
    const { className } = this.props

    return (
      <div
        className={className}
        ref={r => this.ref = r}
      />
    );
  }
}

export default ChartSmall
