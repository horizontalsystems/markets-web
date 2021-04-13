import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFilteredCoins, selectFilteredCoins } from '../../core/reducers/discovery'

import CoinList from './CoinList'

function DiscoveryFilterCoins() {
  const dispatch = useDispatch()
  const filteredCoins = useSelector(state => selectFilteredCoins(state))

  useEffect(() => {
    dispatch(fetchFilteredCoins())
  }, [dispatch])

  return <CoinList coins={filteredCoins} />
}

export default DiscoveryFilterCoins
