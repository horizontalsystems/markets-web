import React from 'react'
import cn from 'classnames'
import { getCoinVolumeChart } from '../../api'
import ChartLight from '../Chart/ChartLight'

class ModalTvlChart extends React.Component {
  state = {
    interval: 'price'
  }

  componentDidMount() {
    this.getChart()
  }

  getChart = () => {
    if (this.state.price) {
      return
    }

    const mapItems = data => {
      const items = []

      for (let i = 0; i < data.length; i++) {
        const [time, value] = data[i];
        items.push({ time: time / 1000, value })
      }

      return items
    }

    getCoinVolumeChart(this.props.coinId)
      .then(({ data }) => {
        this.setState({
          volume: mapItems(data.total_volumes),
          price: mapItems(data.prices),
          cap: mapItems(data.market_caps),
        })
      })
  }

  render() {
    const { interval } = this.state

    const points = this.state[interval]
    const active = key => interval === key
    const changeInterval = key => {
      this.setState({ interval: key })
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
          <button className={cn('btn text-oz me-2', { 'btn-dark': active('price') })} onClick={() => changeInterval('price')}>
            Price
          </button>
          <button className={cn('btn text-oz me-2', { 'btn-dark': active('cap') })} onClick={() => changeInterval('cap')}>
            Market Cap
          </button>
          <button className={cn('btn text-oz me-2', { 'btn-dark': active('volume') })} onClick={() => changeInterval('volume')}>
            Volume
          </button>
        </div>
      </>
    )
  }
}

export default ModalTvlChart
