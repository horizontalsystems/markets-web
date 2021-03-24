import React from 'react'

import ChartSmall from '../Chart/ChartSmall'

function OverviewValueChange({ title, value, change }) {
  return (
    <div className="card bg-lawrence rounded-3 shadow-sm border-0">
      <div className="p-3 pb-1 border-0 rounded-3 text-grey">{title}</div>
      <div className="card-body pt-0">
        <div className="row">
          <div className="col-6">
            <div className="card-text fw-md-600 fw-sm-500 text-oz">{value}</div>
            <div className="card-text text-danger">{change}</div>
          </div>
          <div className="col-6">
            <ChartSmall className="d-flex h-100 align-items-end justify-content-end" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverviewValueChange
