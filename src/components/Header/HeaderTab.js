import React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'

import { ReactComponent as TabBackground } from './tab-bg.svg'
import './HeaderTabs.scss'

function HeaderTabs({ active }) {
  const tabs = [{
    path: '/',
    title: 'Overview'
  }, {
    path: '/discovery',
    title: 'Discovery'
  }, {
    path: '/watchlist',
    title: 'Watchlist'
  }]

  return (
    <div className="HeaderTabs bg-steel-10">
      <div className="container">
        <ul className="nav flex-nowrap overflow-scroll">
          {tabs.map((tab) => {
            const isActive = active === tab.path

            return (
              <li key={tab.title} className="nav-item nav-tab-top">
                <Link to={tab.path} className={cn('nav-link nav-link-tab text-capitalize', { active: isActive })}>
                  {tab.title}
                </Link>
                {isActive && <TabBackground height={56} width={132} className="nav-link-tab-svg" />}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default HeaderTabs
