import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWatchlist, selectWatchlist } from '../../core/reducers/watchlist'

import HeaderTabs from '../Header/HeaderTab'
import CoinList from '../List/CoinList'
import { Star } from '../Icon'

function Watchlist() {
  const dispatch = useDispatch()
  const {
    coins,
    isFetching
  } = useSelector(state => selectWatchlist(state))

  useEffect(() => {
    dispatch(fetchWatchlist())
  }, [dispatch])

  return (
    <div className="Watchlist">
      <HeaderTabs active="/watchlist" />

      <div className="pt-3 py-5">
        <CoinList coins={coins} isFetching={isFetching} emptyMsg={
          <div className="mt-5">
            <div className="pb-4">
              <Star width="48" height="48" />
            </div>

            You don’t have any favorite assets. <br/>
            You can add the favourites by click to star icon in the asset page
          </div>
        } />
      </div>
    </div>
  )
}

export default Watchlist
