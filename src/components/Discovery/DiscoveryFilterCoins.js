import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFilteredCoins, selectFilteredCoins } from '../../core/reducers/discovery'

import CoinList from '../List/CoinList'

function DiscoveryFilterCoins() {
  const dispatch = useDispatch()
  const filteredCoins = useSelector(state => selectFilteredCoins(state))
  const filteredCoinsFetching = useSelector(state => state.discovery.filtersCoinFetching)

  useEffect(() => {
    dispatch(fetchFilteredCoins())
  }, [dispatch])

  return <CoinList coins={filteredCoins} isFetching={filteredCoinsFetching} />
}

export default DiscoveryFilterCoins
