import React from 'react'
import cn from 'classnames'

function CardHead({ icon, title, action, borderBottom = true }) {
  return (
    <div className={cn('pt-2 pb-3 fw-500 px-0 d-flex justify-content-between align-items-center', { 'border-bottom': borderBottom })}>
      <div className="d-flex align-items-center text-oz">
        {icon}<span>{title}</span>
      </div>
      {action}
    </div>
  )
}

export default CardHead
