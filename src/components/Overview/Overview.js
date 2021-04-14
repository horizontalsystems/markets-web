import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchMarkets } from '../../core/reducers/markets'
import { fetchMarketsGlobal } from '../../core/reducers/marketsGlobal'

import News from '../News/News'
import HeaderTabs from '../Header/HeaderTab'
import OverviewSpotlight from './OverviewSpotlight'
import OverviewGlobalMarkets from './OverviewGlobalMarkets'

function Overview() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMarketsGlobal())
    dispatch(fetchMarkets())
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

          <div className="row g-3">
            <div className="col-lg-4">
              <News title="CoinTelegraph" />
            </div>
            <div className="col-lg-4">
              <News title="CoinDesk" />
            </div>
            <div className="col-lg-4">
              <News title="Unstoppable News" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
