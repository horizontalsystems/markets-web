import React from 'react'
import cn from 'classnames'
import { ReactComponent as Blockchains } from './blockchains.svg'

function DiscoveryCard({ active, title, description, onClick }) {
  const cardClasses = {
    'text-oz': !active,
    'text-dark': active,
    'bg-warning': active,
    'bg-lawrence': !active
  }

  return (
    <div className={cn('DiscoveryCard card rounded-3 p-3 m-2 border-0', cardClasses)} role="button" onClick={onClick}>
      <div className="d-flex align-items-center">
        <Blockchains className={cn({ 'svg-dark': active })} />
        <div className="ps-3 fw-500">{title}</div>
      </div>

      <div className={cn({ 'text-grey': !active })}>
        {description}
      </div>
    </div>
  )
}

export default DiscoveryCard
