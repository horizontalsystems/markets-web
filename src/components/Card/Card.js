import React from 'react'
import cn from 'classnames'

function Card({ className, children }) {
  return (
    <div className={cn('card p-3 bg-lawrence shadow-sm rounded-3 border-0', className)}>
      {children}
    </div>
  )
}

export default Card
