import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { fetchMarketsGlobal } from '../../core/reducers/marketsGlobal'
import { fetchDefiCoins, selectDefiTvlDominance } from '../../core/reducers/defi'
import { currencyFormat, percentageFormat, priceColor } from '../../core/helpers'

import HeaderTabs from '../Header/HeaderTab'
import DefiList from '../List/DefiList'
import ChartLight from '../Chart/ChartLight'
import CardVolume from '../Card/CardVolume'
import LoaderValue from '../Loader/LoaderValue'

function DefiTvl() {
  const {
    points,
    totalValueLocked,
    totalValueLockedDiff24h
  } = useSelector(state => state.marketsGlobal)

  const dispatch = useDispatch()
  const coins = useSelector(state => state.defi.coins)
  const chains = useSelector(state => state.defi.chains)
  const defiDominance = useSelector(state => selectDefiTvlDominance(state.defi.coins, totalValueLocked))
  const selectOptions = chains.map(item => ({
    value: item,
    label: item
  }))

  useEffect(() => {
    dispatch(fetchMarketsGlobal())
    dispatch(fetchDefiCoins())
  }, [dispatch])

  return (
    <div className="DefiTvl">
      <HeaderTabs active="/" />

      <div className="py-5">
        <div className="container">
          <div className="row g-3">
            <div className="col-lg-8">
              <div className="card bg-lawrence rounded-3 shadow-sm border-0 h-100">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div className="text-grey fs-md-4 fs-sm-1 pb-2">
                    Total Value Locked
                  </div>
                  {points.tvl && <ChartLight
                    className="w-100"
                    change={totalValueLockedDiff24h}
                    points={points.tvl}
                    height={300}
                    barSpacing={12}
                    rightPrice={true}
                    timeVisible={true}
                  />}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row row-cols-1 g-3">
                <div className="col">
                  <CardVolume
                    title="Total Value Locked"
                    value={currencyFormat(totalValueLocked)}
                    className="text-oz"
                  />
                </div>
                <div className="col">
                  <CardVolume
                    title="Change 24H"
                    value={percentageFormat(totalValueLockedDiff24h)}
                    className={priceColor(totalValueLockedDiff24h)}
                  />
                </div>
                <div className="col">
                  <CardVolume
                    title={`${defiDominance.name} Dominance`}
                    value={defiDominance.value
                      ? percentageFormat(defiDominance.value, null, 'N/A')
                      : <LoaderValue width="150" height="50" /> }
                    className="text-sssyk-blue"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <DefiList coins={coins} selectOptions={selectOptions} />
      </div>
    </div>
  )
}

export default DefiTvl
