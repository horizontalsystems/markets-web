import React from 'react'
import PropTypes from 'prop-types'

import { createChart } from 'lightweight-charts'

class ChartLight extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.object),
    change: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,

    rightPrice: PropTypes.bool,
    barSpacing: PropTypes.number,
    timeVisible: PropTypes.bool
  }

  static defaultProps = {
    rightPrice: false,
    timeVisible: false
  }

  componentDidMount() {
    const { rightPrice, timeVisible, barSpacing } = this.props
    const chart = createChart(this.ref, {
      width: this.props.width,
      height: this.props.height,
      handleScale: true,
      handleScroll: true,
      layout: {
        backgroundColor: 'transparent',
        textColor: '#808085',
      },
      rightPriceScale: {
        visible: rightPrice
      },
      timeScale: {
        barSpacing,
        timeVisible,
        visible: timeVisible,
      },
      grid: {
        vertLines: { visible: false },
        horzLines: { visible: false }
      }
    })

    const { change, points } = this.props
    const isPositive = change >= 0

    const topColor = isPositive ? 'rgba(33, 150, 243, 0.56)' : 'rgba(175,35,111,0.29)'
    const bottomColor = isPositive ? 'rgba(33, 150, 243, 0.04)' : 'rgba(116,19,214,0)'
    const lineColor = isPositive ? 'rgba(33, 150, 243, 1)' : '#ED402E'

    const lineSeries = chart.addAreaSeries({
      topColor,
      bottomColor,
      lineColor,
      lineWidth: 1
    })

    lineSeries.setData(points)
  }

  render() {
    const { className } = this.props

    return (
      <div
        className={className}
        ref={r => this.ref = r}
      />
    )
  }
}

export default ChartLight
