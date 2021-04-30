import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFilteredCoins, selectFilteredCoins } from '../../core/reducers/discovery'

import CoinList from '../List/CoinList'

function DiscoveryFilterCoins() {
  const dispatch = useDispatch()
  const filteredCoins = useSelector(state => selectFilteredCoins(state))

  useEffect(() => {
    dispatch(fetchFilteredCoins())
  }, [dispatch])

  return <CoinList coins={filteredCoins} isFetching={!filteredCoins.length} />
}

export default DiscoveryFilterCoins
