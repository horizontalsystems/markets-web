import React from 'react'
import OverviewMarketCap from './OverviewMarketCap'
import OverviewValueChange from './OverviewValueChange'
import OverviewTopCoins from './OverviewTopCoins'
import HeaderTabs from '../Header/HeaderTab'
import News from '../News/News'

const tokens = [
  {
    'id': 'bitcoin',
    'symbol': 'btc',
    'name': 'Bitcoin',
    'image': 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    'current_price': 56204,
    'market_cap': 1046867395595,
    'total_volume': 74414475578,
    'price_change_24h': -2174.31275995,
    'price_change_percentage_24h': -3.72455,
  },
  {
    'id': 'ethereum',
    'symbol': 'eth',
    'name': 'Ethereum',
    'image': 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
    'current_price': 1825.11,
    'market_cap': 209888022964,
    'total_volume': 34524350354,
    'price_change_24h': 17.83,
    'price_change_percentage_24h': 0.98652,
  },
  {
    'id': 'binancecoin',
    'symbol': 'bnb',
    'name': 'Binance Coin',
    'image': 'https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034615',
    'current_price': 268.52,
    'market_cap': 41434927107,
    'total_volume': 2260768123,
    'price_change_24h': 4.06,
    'price_change_percentage_24h': 1.53337,
  },
]

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
              <OverviewTopCoins tokens={tokens} title="Top gainers" headIcon="outlined-up" seeAllRoute />
            </div>
            <div className="col-lg-4">
              <OverviewTopCoins tokens={tokens} title="Top losers" headIcon="outlined-down" seeAllRoute />
            </div>
            <div className="col-lg-4">
              <OverviewTopCoins tokens={tokens} title="TVL change" headIcon="histogram" />
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
