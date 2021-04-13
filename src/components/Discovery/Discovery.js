import React from 'react'

import HeaderTabs from '../Header/HeaderTab'
import DiscoveryNav from './DiscoveryNav'
import DiscoveryCoins from './DiscoveryCoins'
import DiscoveryCards from '../DiscoveryCard/DiscoveryCards'

function Discovery({ match }) {
  return (
    <div className="Discovery">
      <HeaderTabs active="/discovery" />

      <div className="py-5">
        <div className="container">
          <DiscoveryNav active="/discovery" />
          <DiscoveryCards current={match.params.category} />
        </div>
        <DiscoveryCoins category={match.params.category} />
      </div>
    </div>
  )
}

export default Discovery
