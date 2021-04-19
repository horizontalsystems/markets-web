import React from 'react'
import { useSelector } from 'react-redux'
import { selectTopGainers5, selectTopLosers5 } from '../../core/reducers/markets'
import { selectDefiCoins5 } from '../../core/reducers/defi'
import { Histogram, OutlinedDown, OutlinedUp } from '../Icon'

import OverviewTopCoins from './OverviewTopCoins'
import OverviewTvlChange from './OverviewTvlChange'

function OverviewSpotlight() {
  const topGainers = useSelector(state => selectTopGainers5(state))
  const topLosers = useSelector(state => selectTopLosers5(state))
  const tvlGainers = useSelector(state => selectDefiCoins5(state))

  return (
    <div className="row g-3">
      <div className="col-lg-4">
        <OverviewTopCoins tokens={topGainers} title="Top gainers" headIcon={OutlinedUp} seeMorePath="/top-gainers" />
      </div>
      <div className="col-lg-4">
        <OverviewTopCoins tokens={topLosers} title="Top losers" headIcon={OutlinedDown} seeMorePath="/top-losers" />
      </div>
      <div className="col-lg-4">
        <OverviewTvlChange tokens={tvlGainers} title="TVL change" headIcon={Histogram} seeMorePath="/tvl-change" />
      </div>
    </div>
  )
}

export default OverviewSpotlight
