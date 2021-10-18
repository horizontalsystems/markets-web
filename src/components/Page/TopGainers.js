import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMarkets, selectTopGainers } from '../../core/reducers/markets'

import HeaderTabs from '../Header/HeaderTab'
import CoinList from '../List/CoinList'

function TopGainers() {
  const dispatch = useDispatch()
  const coins = useSelector(state => selectTopGainers(state))

  useEffect(() => {
    dispatch(fetchMarkets())
  }, [dispatch])

  return (
    <div className="TopGainers">
      <HeaderTabs active="/" />

      <div className="py-5">
        <div className="container">
          <h3 className="text-oz pb-3">
            Top Gainers
          </h3>
        </div>

        <CoinList coins={coins} isFetching={!coins.length} initialSort={{ field: 'priceChange24h', value: 't_gainers', label: 'Top Gainers', desc: true }} />
      </div>
    </div>
  )
}

export default TopGainers
