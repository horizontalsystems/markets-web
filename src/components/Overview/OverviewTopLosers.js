import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMarkets, selectTopLosers } from '../../core/reducers/markets'

import HeaderTabs from '../Header/HeaderTab'
import CoinList from '../Discovery/CoinList'

function OverviewTopLosers() {
  const dispatch = useDispatch()
  const coins = useSelector(state => selectTopLosers(state))

  useEffect(() => {
    dispatch(fetchMarkets())
  }, [dispatch])

  return (
    <div className="OverviewTopLosers">
      <HeaderTabs active="/" />

      <div className="py-5">
        <div className="container">
          <h3 className="text-oz pb-3">
            Top Losers
          </h3>
        </div>

        <CoinList coins={coins} />
      </div>
    </div>
  )
}

export default OverviewTopLosers
