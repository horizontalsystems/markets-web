import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMarkets, selectTopLosers } from '../../core/reducers/markets'

import HeaderTabs from '../Header/HeaderTab'
import CoinList from '../List/CoinList'

function TopLosers() {
  const dispatch = useDispatch()
  const coins = useSelector(state => selectTopLosers(state))

  useEffect(() => {
    dispatch(fetchMarkets())
  }, [dispatch])

  return (
    <div className="TopLosers">
      <HeaderTabs active="/" />

      <div className="py-5">
        <div className="container">
          <h3 className="text-oz pb-3">
            Top Losers
          </h3>
        </div>

        <CoinList coins={coins} isFetching={!coins.length} initialSort={{ field: 'priceChange24h', value: 't_losers', label: 'Top Losers', desc: false }} />
      </div>
    </div>
  )
}

export default TopLosers
