import React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import { ReactComponent as Blockchains } from './blockchains.svg'

function DiscoveryCard({ active, id, title, description }) {
  const cardClasses = {
    'text-oz': !active,
    'text-dark': active,
    'bg-warning': active,
    'bg-lawrence': !active
  }

  return (
    <Link to={`/discovery/${id}`} className={cn('DiscoveryCard card rounded-3 p-3 m-2', cardClasses)}>
      <div className="d-flex align-items-center">
        <Blockchains className={cn({ 'svg-dark': active })} />
        <div className="ps-3 fw-500">{title}</div>
      </div>

      <div className={cn({ 'text-grey': !active })}>
        {description}
      </div>
    </Link>
  )
}

export default DiscoveryCard
