import React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'

export const tabs = [{
  path: '/discovery',
  name: 'Categories'
}, {
  path: '/discovery/filter',
  name: 'Advanced Search'
}]

export default function DiscoveryNav({ active }) {
  return (
    <ul className="nav nav-pills">
      {tabs.map((tab, index) => {
        const isActive = active === tab.path

        const className = {
          'bg-warning': isActive,
          'bg-lawrence': !isActive,
          'text-dark': isActive,
          'text-jacob': !isActive
        }

        return (
          <li key={index} className="nav-item pe-2 fw-500">
            <Link to={tab.path} className={cn('nav-link rounded-4 px-4 fw-500', className)}>
              {tab.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
