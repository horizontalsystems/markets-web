import cn from 'classnames'
import React from 'react'

function CardVolume({ title, value, className }) {
  return (
    <div className="card bg-lawrence rounded-3 shadow-sm border-0">
      <div className="p-3 pb-1 border-0 rounded-3 text-grey">
        {title}
      </div>
      <div className="card-body pt-0">
        <div className={cn('display-5 fw-md-600 fw-sm-500 text-uppercase', className)}>
          {value}
        </div>
      </div>
    </div>
  )
}

export default CardVolume
