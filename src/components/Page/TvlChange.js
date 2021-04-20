import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDefiMarkets, selectDefiCoins } from '../../core/reducers/defi'

import HeaderTabs from '../Header/HeaderTab'
import DefiList from '../List/DefiList'

function TvlChange() {
  const dispatch = useDispatch()
  const coins = useSelector(state => selectDefiCoins(state))
  const chains = useSelector(state => state.defi.chains)
  const selectOptions = chains.map(item => ({ value: item, label: item }))

  useEffect(() => {
    dispatch(fetchDefiMarkets())
  }, [dispatch])

  return (
    <div className="TvlChange">
      <HeaderTabs active="/" />

      <div className="py-5">
        <div className="container">
          <h3 className="text-oz pb-3">
            TVL Change
          </h3>
        </div>

        <DefiList coins={coins} selectOptions={selectOptions} />
      </div>
    </div>
  )
}

export default TvlChange
