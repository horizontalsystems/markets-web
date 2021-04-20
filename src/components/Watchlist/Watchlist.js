import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWatchlist, selectWatchlist } from '../../core/reducers/watchlist'

import HeaderTabs from '../Header/HeaderTab'
import CoinList from '../List/CoinList'

function Watchlist() {
  const dispatch = useDispatch()
  const coins = useSelector(state => selectWatchlist(state))

  useEffect(() => {
    dispatch(fetchWatchlist())
  }, [dispatch])

  return (
    <div className="Watchlist">
      <HeaderTabs active="/watchlist" />

      <div className="pt-3 py-5">
        <CoinList coins={coins} />
      </div>
    </div>
  )
}

export default Watchlist
