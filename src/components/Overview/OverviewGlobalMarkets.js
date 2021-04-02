import React from 'react'
import { connect } from 'react-redux'
import { currency, percentage } from '../../core/helpers'

import OverviewMarketCap from './OverviewMarketCap'
import OverviewValueChange from './OverviewValueChange'

function OverviewGlobalMarkets(props) {
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
  } = props

  return (
    <div className="row g-3">
      <div className="col-lg-6">
        <OverviewMarketCap marketCap={marketCap} marketCapDiff24h={marketCapDiff24h} />
      </div>
      <div className="col-lg-6">
        <div className="row row-cols-1 row-cols-md-2 g-3">
          <div className="col">
            <OverviewValueChange
              title="Volume 24H"
              value={currency(volume24h)}
              change={volume24hDiff}
              points={points.volume}
            />
          </div>
          <div className="col">
            <OverviewValueChange
              title="BTC Dominance"
              value={percentage(dominanceBTC, { forceSign: false })}
              change={dominanceBTCDiff24h}
              points={points.dominance}
            />
          </div>
          <div className="col">
            <OverviewValueChange
              title="DeFi Market Cap"
              value={currency(marketCapDefi)}
              change={marketCapDefiDiff24h}
              points={points.defiMarket}
            />
          </div>
          <div className="col">
            <OverviewValueChange
              title="TVL in DeFi"
              value={currency(totalValueLocked)}
              change={totalValueLockedDiff24h}
              points={points.tvl}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(state => state.marketsGlobal)(OverviewGlobalMarkets)
