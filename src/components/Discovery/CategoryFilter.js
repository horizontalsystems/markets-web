import React, { useState } from 'react'
import cn from 'classnames'
import DiscoveryCards from '../DiscoveryCard/DiscoveryCards'
import CategorySearch from './CategorySearch'
import coins from '../../core/coins-store'

function CategoryFilter({ category }) {
  const [activeTabIndex, setActiveTab] = useState(0)
  const tabs = [{ title: 'Categories' }, { title: 'Advanced Search' }]
  let content

  switch (activeTabIndex) {
    case 0: {
      content = <DiscoveryCards categories={coins.categories} current={category} />
      break
    }
    case 1: {
      content = <CategorySearch />
      break
    }
    default:
      break
  }

  return (
    <div className="container">
      <ul className="nav nav-pills">
        {tabs.map((tab, index) => {
          const active = activeTabIndex === index
          const className = {
            active,
            'bg-warning': active,
            'bg-lawrence': !active,
            'text-dark': active,
            'text-jacob': !active
          }

          return (
            <li key={index} className="nav-item pe-2">
              <button
                onClick={() => setActiveTab(index)}
                className={cn('nav-link rounded-3', className)}>
                {tab.title}
              </button>
            </li>
          )
        })}
      </ul>

      {content}
    </div>
  )
}

export default CategoryFilter
