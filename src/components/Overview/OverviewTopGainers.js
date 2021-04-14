import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMarkets, selectTopGainers } from '../../core/reducers/markets'

import HeaderTabs from '../Header/HeaderTab'
import CoinList from '../Discovery/CoinList'

function OverviewTopGainers() {
  const dispatch = useDispatch()
  const coins = useSelector(state => selectTopGainers(state))

  useEffect(() => {
    dispatch(fetchMarkets())
  }, [dispatch])

  return (
    <div className="OverviewTopGainers">
      <HeaderTabs active="/" />

      <div className="py-5">
        <div className="container">
          <h3 className="text-oz pb-3">
            Top Gainers
          </h3>
        </div>

        <CoinList coins={coins} />
      </div>
    </div>
  )
}

export default OverviewTopGainers
