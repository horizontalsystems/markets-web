import React from 'react'
import cn from 'classnames'
import { getCoinTvlChart } from '../../api'
import ChartLight from '../Chart/ChartLight'

class ModalTvlChart extends React.Component {
  state = {
    interval: '1w'
  }

  componentDidMount() {
    this.getChart(this.state.interval)
  }

  getChart = interval => {
    if (this.state[interval]) {
      return
    }

    getCoinTvlChart(this.props.coinId, interval)
      .then(({ data }) => {
        const points = []
        for (let i = 0; i < data.length; i++) {
          const item = data[i];
          const time = parseInt(item.date)
          points.push({ time, value: item.tvl })
        }

        this.setState({
          [interval]: points
        })
      })
  }

  render() {
    const { interval } = this.state

    const points = this.state[interval]
    const active = key => interval === key
    const changeInterval = key => {
      this.setState({ interval: key })
      this.getChart(key)
    }

    return (
      <>
        <div className="bg-lawrence">
          {points ? <ChartLight
            key={interval}
            className="w-100"
            change={0}
            points={points}
            height={300}
            barSpacing={12}
            rightPrice={true}
            timeVisible={true}
          /> : (
            <div className="text-center m-5">
              <div className="spinner-border text-white" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>
        <div className="modal-footer bg-lawrence justify-content-start">
          <button className={cn('btn text-oz me-2', { 'btn-dark': active('1d') })} onClick={() => changeInterval('1d')}>
            24H
          </button>
          <button className={cn('btn text-oz me-2', { 'btn-dark': active('1w') })} onClick={() => changeInterval('1w')}>
            7D
          </button>
          <button className={cn('btn text-oz me-2', { 'btn-dark': active('2w') })} onClick={() => changeInterval('2w')}>
            14D
          </button>
          <button className={cn('btn text-oz me-2', { 'btn-dark': active('1m') })} onClick={() => changeInterval('1m')}>
            1M
          </button>
        </div>
      </>
    )
  }
}

export default ModalTvlChart
