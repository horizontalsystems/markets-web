import React from 'react'

import HeaderTabs from '../Header/HeaderTab'
import DiscoveryNav from './DiscoveryNav'
import DiscoverySearch from './DiscoverySearch'
import DiscoveryFilterCoins from './DiscoveryFilterCoins'

function DiscoveryFilter() {
  return (
    <div className="Discovery">
      <HeaderTabs active="/discovery" />

      <div className="py-5">
        <div className="container">
          <DiscoveryNav active="/discovery/filter" />
          <DiscoverySearch />
        </div>
        <DiscoveryFilterCoins />
      </div>
    </div>
  )
}

export default DiscoveryFilter
