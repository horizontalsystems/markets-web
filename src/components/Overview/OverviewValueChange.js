import React from 'react'
import cn from 'classnames'

import { percentage, priceColor } from '../../core/helpers'

import ChartSmall from '../Chart/ChartSmall'

function OverviewValueChange({ title, value, change, points }) {
  return (
    <div className="card bg-lawrence rounded-3 shadow-sm border-0">
      <div className="p-3 pb-1 border-0 rounded-3 text-grey">{title}</div>
      <div className="card-body pt-0">
        <div className="row">
          <div className="col-6">
            <div className="card-text fw-md-600 fw-sm-500 text-oz text-uppercase">
              {value}
            </div>
            <div className={cn('card-text', priceColor(change))}>
              {percentage(change)}
            </div>
          </div>
          <div className="col-6">
            {points && <ChartSmall
              className="d-flex h-100 align-items-end justify-content-end"
              points={points}
              change={change}
            />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverviewValueChange
