import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchMarkets } from '../../core/reducers/markets'
import { fetchMarketsGlobal } from '../../core/reducers/marketsGlobal'
import { fetchNews } from '../../core/reducers/news'

import OverviewNews from './OverviewNews'
import HeaderTabs from '../Header/HeaderTab'
import OverviewSpotlight from './OverviewSpotlight'
import OverviewGlobalMarkets from './OverviewGlobalMarkets'

function Overview() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMarketsGlobal())
    dispatch(fetchMarkets())
    dispatch(fetchNews())
  }, [dispatch])

  return (
    <div className="Overview">
      <HeaderTabs active="/" />

      <div className="py-5">
        <div className="container">
          <OverviewGlobalMarkets />

          <h3 className="text-oz pb-3 pt-4">
            Spotlight
          </h3>

          <OverviewSpotlight />

          <h3 className="text-oz pb-3 pt-4">
            News
          </h3>

          <OverviewNews />
        </div>
      </div>
    </div>
  )
}

export default Overview
