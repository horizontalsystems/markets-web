import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchMarkets } from '../../core/reducers/markets'
import { fetchDefiCoins } from '../../core/reducers/defi'
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
    dispatch(fetchDefiCoins())
    dispatch(fetchNews())
  }, [dispatch])

  return (
    <div className="Overview">
      <HeaderTabs active="/" />

      <div className="py-5">
        <div className="container">
          <OverviewGlobalMarkets />

          <h3 className="text-oz pb-2 pt-4 my-2 fw-normal fs-4">
            Spotlight
          </h3>

          <OverviewSpotlight />

          <OverviewNews />
        </div>
      </div>
    </div>
  )
}

export default Overview
