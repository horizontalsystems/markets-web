import React from 'react'
import OverviewMarketCap from './OverviewMarketCap'
import OverviewValueChange from './OverviewValueChange'
import OverviewTopCoins from './OverviewTopCoins'
import HeaderTabs from '../Header/HeaderTab'
import News from '../News/News'

function Overview() {
  return (
    <div className="Overview">
      <HeaderTabs active="/" />

      <div className="py-5">
        <div className="container">
          <div className="row g-3">
            <div className="col-lg-6">
              <OverviewMarketCap />
            </div>
            <div className="col-lg-6">
              <div className="row row-cols-1 row-cols-md-2 g-3">
                <div className="col">
                  <OverviewValueChange title="Volume 24H" value="$ 167.84B" change="-8.47%" />
                </div>
                <div className="col">
                  <OverviewValueChange title="BTC Dominance" value="60.34%" change="-8.47%" />
                </div>
                <div className="col">
                  <OverviewValueChange title="DeFi Market Cap" value="$ 167.84B" change="-8.47%" />
                </div>
                <div className="col">
                  <OverviewValueChange title="TVL in DeFi" value="$ 167.84B" change="-8.47%" />
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-oz pb-3 pt-4">
            Spotlight
          </h3>
          <div className="row g-3">
            <div className="col-lg-4">
              <OverviewTopCoins title="Top gainers" headIcon="outlined-up" seeAllRoute />
            </div>
            <div className="col-lg-4">
              <OverviewTopCoins title="Top losers" headIcon="outlined-down" seeAllRoute />
            </div>
            <div className="col-lg-4">
              <OverviewTopCoins title="TVL change" headIcon="histogram" />
            </div>
          </div>

          <h3 className="text-oz pb-3 pt-4">
            News
          </h3>
          <div className="row g-3">
            <div className="col-lg-4">
              <News title="Unfolded" />
            </div>
            <div className="col-lg-4">
              <News title="Decrypt" />
            </div>
            <div className="col-lg-4">
              <News title="Coindesk" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
