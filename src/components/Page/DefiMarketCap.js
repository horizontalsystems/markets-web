import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { fetchMarketsGlobal } from '../../core/reducers/marketsGlobal'
import { fetchDefiMarkets, selectDefiMarketDominance } from '../../core/reducers/defi'
import { currencyFormat, percentageFormat, priceColor } from '../../core/helpers'

import HeaderTabs from '../Header/HeaderTab'
import ChartLight from '../Chart/ChartLight'
import CardVolume from '../Card/CardVolume'
import CoinList from '../List/CoinList'
import LoaderValue from '../Loader/LoaderValue'

function DefiMarketCap() {
  const {
    points,
    marketCap,
    totalValueLocked,
    totalValueLockedDiff24h,

    marketCapDefi,
    marketCapDefiDiff24h,
  } = useSelector(state => state.marketsGlobal)

  const dispatch = useDispatch()
  const coins = useSelector(state => state.defi.markets)
  const defiDominance = useSelector(state => selectDefiMarketDominance(state.defi.markets, marketCap))

  const defiMarketDominance = () => {
    if (marketCap && totalValueLocked) {
      return totalValueLocked * 100 / marketCap
    }

    return 0
  }

  useEffect(() => {
    dispatch(fetchMarketsGlobal())
    dispatch(fetchDefiMarkets())
  }, [dispatch])

  return (
    <div className="DefiMarketCap">
      <HeaderTabs active="/" />

      <div className="py-5">
        <div className="container">
          <div className="row g-3">
            <div className="col-lg-8">
              <div className="card bg-lawrence rounded-3 shadow-sm border-0 h-100">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div className="text-grey fs-md-4 fs-sm-1 pb-2">
                    DeFi Market Capitalization
                  </div>
                  {points.tvl && <ChartLight
                    className="w-100"
                    change={marketCapDefiDiff24h}
                    points={points.defiMarket}
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
                    title="DeFi Market Cap"
                    value={currencyFormat(marketCapDefi)}
                    className="text-oz"
                  />
                </div>
                <div className="col">
                  <CardVolume
                    title="Defi Dominance (vs. Global)"
                    value={percentageFormat(defiMarketDominance(), { forceSign: false })}
                    className={priceColor(totalValueLockedDiff24h)}
                  />
                </div>
                <div className="col">
                  <CardVolume
                    title={`${defiDominance.name} Dominance`}
                    value={defiDominance.value
                      ? percentageFormat(defiDominance.value, null, 'N/A')
                      : <LoaderValue width="150" height="50" />
                    }
                    className="text-sssyk-blue"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <CoinList coins={coins} isFetching={!coins.length} />
      </div>
    </div>
  )
}

export default DefiMarketCap
