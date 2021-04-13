import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMarkets, selectMarketsCoins } from '../../core/reducers/markets'
import { fetchDiscoveryMarkets, selectCategoryCoins } from '../../core/reducers/discovery'

import CoinList from './CoinList'

function DiscoveryCoins({ category }) {
  const dispatch = useDispatch()
  const marketsCoins = useSelector(state => selectMarketsCoins(state, category))
  const categoryCoins = useSelector(state => selectCategoryCoins(state, category))

  useEffect(() => {
    if (category) {
      dispatch(fetchDiscoveryMarkets())
    } else {
      dispatch(fetchMarkets())
    }
  }, [dispatch, category])

  return <CoinList coins={category ? categoryCoins : marketsCoins} />
}

export default DiscoveryCoins
