import React from 'react'
import cn from 'classnames'

import { Link } from 'react-router-dom'
import { percentageFormat, priceColor } from '../../core/helpers'

import ChartLight from '../Chart/ChartLight'

function OverviewValueChange({ title, value, change, points, seeMoreLink }) {
  return (
    <Link to={seeMoreLink} className="text-decoration-none">
      <div className="card bg-lawrence rounded-3 shadow-sm border-0">
        <div className="p-3 pb-1 border-0 rounded-3 text-grey">
          {title}
        </div>
        <div className="card-body pt-0">
          <div className="row">
            <div className="col-6">
              <div className="card-text fw-md-600 fw-sm-500 text-oz text-uppercase">
                {value}
              </div>
              <div className={cn('card-text', priceColor(change))}>
                {percentageFormat(change)}
              </div>
            </div>
            <div className="col-6">
              {points && <ChartLight
                className="d-flex h-100 align-items-end justify-content-end"
                points={points}
                change={change}
              />}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default OverviewValueChange
