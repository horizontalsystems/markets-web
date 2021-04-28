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

function Dominance() {
  const {
    points,
    marketCap,
    marketCapDiff24h,
    dominanceBTCDiff24h,
    dominanceBTC
  } = useSelector(state => state.marketsGlobal)

  const dispatch = useDispatch()
  const coins = useSelector(state => state.markets.coins)

  useEffect(() => {
    dispatch(fetchMarketsGlobal())
    dispatch(fetchMarkets())
  }, [dispatch])

  return (
    <div className="Dominance">
      <HeaderTabs active="/" />

      <div className="py-5">
        <div className="container">
          <div className="row g-3">
            <div className="col-lg-8">
              <div className="card bg-lawrence rounded-3 shadow-sm border-0 h-100">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div className="text-grey fs-md-4 fs-sm-1 pb-2">
                    BTC dominance
                  </div>
                  {points.tvl && <ChartLight
                    className="w-100"
                    change={dominanceBTCDiff24h}
                    points={points.dominance}
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
                    title="Total Market Cap"
                    value={currencyFormat(marketCap)}
                    className="text-oz"
                  />
                </div>
                <div className="col">
                  <CardVolume
                    title="BTC Dominance"
                    value={percentageFormat(dominanceBTC, { forceSign: false })}
                    className="text-oz"
                  />
                </div>
                <div className="col">
                  <CardVolume
                    title="Change 24H"
                    value={marketCapDiff24h
                      ? percentageFormat(marketCapDiff24h, null, 'N/A')
                      : <LoaderValue width="150" height="50" /> }
                    className={priceColor(marketCapDiff24h)}
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

export default Dominance
