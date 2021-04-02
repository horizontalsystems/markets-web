import React from 'react'
import { connect } from 'react-redux'
import { Histogram, OutlinedDown, OutlinedUp } from '../Icon'

import OverviewTopCoins from './OverviewTopCoins'
import OverviewTvlChange from './OverviewTvlChange'

function OverviewSpotlight({ coins, gainers, losers, gainersTvl }) {
  return (
    <div className="row g-3">
      <div className="col-lg-4">
        <OverviewTopCoins tokens={gainers} title="Top gainers" headIcon={OutlinedUp} />
      </div>
      <div className="col-lg-4">
        <OverviewTopCoins tokens={losers} title="Top losers" headIcon={OutlinedDown} />
      </div>
      <div className="col-lg-4">
        <OverviewTvlChange tokens={gainersTvl} title="TVL change" headIcon={Histogram} />
      </div>
    </div>
  )
}

const mapStateToProps = ({ markets }) => ({
  coins: markets.coins,
  gainers: markets.gainers,
  losers: markets.losers,
  gainersTvl: markets.gainersTvl
})

export default connect(mapStateToProps)(OverviewSpotlight)
