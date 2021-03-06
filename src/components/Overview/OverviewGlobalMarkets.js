import React from 'react'
import { useSelector } from 'react-redux'
import { currencyFormat, percentageFormat } from '../../core/helpers'

import OverviewMarketCap from './OverviewMarketCap'
import OverviewValueChange from './OverviewValueChange'

function OverviewGlobalMarkets() {
  const {
    points,
    marketCap,
    marketCapDiff24h,
    marketCapDefi,
    marketCapDefiDiff24h,
    volume24h,
    volume24hDiff,
    dominanceBTC,
    dominanceBTCDiff24h,
    totalValueLocked,
    totalValueLockedDiff24h
  } = useSelector(state => state.marketsGlobal)

  return (
    <div className="row g-3">
      <div className="col-lg-6">
        <OverviewMarketCap
          marketCap={marketCap}
          marketCapDiff24h={marketCapDiff24h}
        />
      </div>
      <div className="col-lg-6">
        <div className="row row-cols-1 row-cols-md-2 g-3">
          <div className="col">
            <OverviewValueChange
              title="Volume 24H"
              value={currencyFormat(volume24h)}
              change={volume24hDiff}
              points={points.volume}
              seeMoreLink="/volume"
            />
          </div>
          <div className="col">
            <OverviewValueChange
              title="BTC Dominance"
              value={percentageFormat(dominanceBTC, { forceSign: false })}
              change={dominanceBTCDiff24h}
              points={points.dominance}
              seeMoreLink="/btc-dominance"
            />
          </div>
          <div className="col">
            <OverviewValueChange
              title="DeFi Market Cap"
              value={currencyFormat(marketCapDefi)}
              change={marketCapDefiDiff24h}
              points={points.defiMarket}
              seeMoreLink="/defi-market-cap"
            />
          </div>
          <div className="col">
            <OverviewValueChange
              title="TVL in DeFi"
              value={currencyFormat(totalValueLocked)}
              change={totalValueLockedDiff24h}
              points={points.tvl}
              seeMoreLink="/defi-tvl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverviewGlobalMarkets
