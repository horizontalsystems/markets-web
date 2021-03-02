import React from 'react'
import { ReactComponent as PriceBackground } from './price-change-bg.svg'
import { ReactComponent as PriceGradient } from './price-change-gradient.svg'

import './OverviewMarketCap.scss'

function OverviewMarketCap() {
  return (
    <div className="card bg-lawrence rounded-3 h-100 shadow-sm border-0 overflow-hidden">
      <div className="row h-100">
        <div className="col-6">
          <div className="p-4 pe-0 d-flex flex-column justify-content-between">
            <div className="text-grey fs-md-4 fs-sm-1 pb-md-5 pb-1">
              Total Market Cap
            </div>
            <div>
              <div className="display-5 text-oz fw-md-600 fw-sm-500">
                $1,431T
              </div>
              <div className="fs-4 text-danger">
                -2.47%
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex h-100 p-4 ps-0">
            <div className="d-flex w-100 h-100 position-relative">
              <PriceBackground className="position-absolute h-100 start-0" />
              <PriceGradient className="position-absolute h-100 end-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverviewMarketCap
