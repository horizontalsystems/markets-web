import React from 'react'
import numbro from 'numbro'
import cn from 'classnames'
import Gradient from 'react-avatar-editor'

import PriceBackground from './price-change-bg.svg'
import PriceGradient from './price-change-gradient.svg'
import { percentageFormat, priceColor } from '../../core/helpers'

function OverviewMarketCap({ marketCap, marketCapDiff24h }) {
  return (
    <div className="card bg-lawrence rounded-3 h-100 shadow-sm border-0 overflow-hidden">
      <div className="row h-100">
        <div className="col-6">
          <div className="p-4 h-100 pe-0 d-flex flex-column justify-content-between">
            <div className="text-grey fs-md-4 fs-sm-1 pb-md-5 pb-1">
              Total Market Cap
            </div>
            <div>
              <div className="display-5 text-oz fw-md-600 fw-sm-500 text-uppercase">
                {numbro(marketCap).format({ average: true, totalLength: 3 })}
              </div>
              <div className={cn('fs-4', priceColor(marketCapDiff24h))}>
                {percentageFormat(marketCapDiff24h)}
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex h-100 p-4 ps-0">
            <div className="d-flex w-100 h-100 position-relative">
              <img src={PriceBackground} className="position-absolute h-100 start-0" alt="" />
              <Gradient
                className="position-absolute h-100 end-0 rounded-circle"
                style={{ width: 'unset' }}
                position={{ x: changeX(marketCapDiff24h), y: 0 }}
                image={PriceGradient}
                border={0}
                borderRadius={100}
                scale={1}
                rotate={0}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function changeX(value) {
  const middle = 0.5

  if (!value) {
    return middle
  }

  const multiplier = 3
  const number = Math.min(Math.max(value * multiplier, -100), 100)

  return middle + (-number / 100 * middle)
}

export default OverviewMarketCap
