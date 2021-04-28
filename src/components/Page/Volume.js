import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { fetchMarketsGlobal } from '../../core/reducers/marketsGlobal'
import { currencyFormat, percentageFormat, priceColor } from '../../core/helpers'
import { fetchMarkets } from '../../core/reducers/markets'

import HeaderTabs from '../Header/HeaderTab'
import ChartLight from '../Chart/ChartLight'
import CardVolume from '../Card/CardVolume'
import CoinList from '../List/CoinList'
import LoaderValue from '../Loader/LoaderValue'

function Volume() {
  const {
    points,
    volume24h,
    volume24hDiff,
  } = useSelector(state => state.marketsGlobal)

  const dispatch = useDispatch()
  const coins = useSelector(state => state.markets.coins)

  useEffect(() => {
    dispatch(fetchMarketsGlobal())
    dispatch(fetchMarkets())
  }, [dispatch])

  return (
    <div className="Volume">
      <HeaderTabs active="/" />

      <div className="py-5">
        <div className="container">
          <div className="row g-3">
            <div className="col-lg-8">
              <div className="card bg-lawrence rounded-3 shadow-sm border-0 h-100">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div className="text-grey fs-md-4 fs-sm-1 pb-2">
                    Volume
                  </div>
                  {points.tvl && <ChartLight
                    className="w-100"
                    change={volume24hDiff}
                    points={points.volume}
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
                    title="Volume 24H"
                    value={currencyFormat(volume24h)}
                    className="text-oz"
                  />
                </div>
                <div className="col">
                  <CardVolume
                    title="Change 24H"
                    value={volume24hDiff
                      ? percentageFormat(volume24hDiff, null, 'N/A')
                      : <LoaderValue width="150" height="50" />}
                    className={priceColor(volume24hDiff)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <CoinList coins={coins} />
      </div>
    </div>
  )
}

export default Volume
