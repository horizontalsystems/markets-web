import React from 'react'
import './HeaderTabs.scss'

import { ReactComponent as TabBackground } from './tab-bg.svg'

function HeaderTabs() {
  return (
    <div className="HeaderTabs bg-steel-10">
      <div className="container">
        <ul className="nav flex-nowrap overflow-scroll">
          <li className="nav-item nav-tab-top">
            <a className="nav-link nav-link-tab active" href="/">
              Overview
            </a>
            <TabBackground height={56} width={132} className="nav-link-tab-svg" />
          </li>
          <li className="nav-item nav-tab-top">
            <a className="nav-link nav-link-tab" href="/">
              Discovery
            </a>
          </li>
          <li className="nav-item nav-tab-top">
            <a className="nav-link nav-link-tab" href="/">
              Watchlist
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderTabs
