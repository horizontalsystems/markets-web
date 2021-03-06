import React from 'react'
import cn from 'classnames'
import Gradient from 'react-avatar-editor'
import { currencyFormat, percentageFormat, priceColor } from '../../core/helpers'

import PriceBackground from './price-change-bg.svg'
import PriceGradient from './price-change-gradient.svg'
import LoaderValue from '../Loader/LoaderValue'

function OverviewMarketCap({ marketCap, marketCapDiff24h }) {
  return (
    <div className="card bg-lawrence rounded-3 h-100 shadow-sm border-0 overflow-hidden">
      <div className="row h-100">
        <div className="col-6">
          <div className="p-4 h-100 pe-0 d-flex flex-column justify-content-between">
            <div className="text-grey fs-md-4 fs-sm-1 pb-md-5 pb-1">
              Total Market Cap
            </div>
            <div className="d-flex">
              <div>
                <div className="display-5 text-oz fw-md-600 fw-sm-500 text-uppercase">
                  {marketCap
                    ? currencyFormat(marketCap, { average: true, totalLength: 3 })
                    : <LoaderValue width="120" height="35" />}
                </div>
                <div className={cn('fs-4', priceColor(marketCapDiff24h))}>
                  {marketCapDiff24h ? percentageFormat(marketCapDiff24h) : <LoaderValue width="100" height="20" />}
                </div>
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
