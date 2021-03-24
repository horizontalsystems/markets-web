import React from 'react'
import { Link } from 'react-router-dom'
import Chart from '../Chart/Chart'
import CoinMarkets from './CoinMarkets'
import CoinPerformance from './CoinPerformance'
import CoinStats from './CoinStats'
import CoinInfo from './CoinInfo'
import CoinVolume from './CoinVolume'
import CoinSidebar from './CoinSidebar'

const tokens = [
  {
    'id': 'bitcoin',
    'symbol': 'btc',
    'name': 'Bitcoin',
    'image': 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    'current_price': 56204,
    'market_cap': 1046867395595,
    'total_volume': 74414475578,
    'price_change_24h': -2174.31,
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

function Coin() {
  return (
    <div className="Coin">
      <div className="container pb-5">
        <nav aria-label="breadcrumb" className="pt-2">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Market</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/">Discovery</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/">Stablecoin Issuers</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              BTC
            </li>
          </ol>
        </nav>

        <div className="row row-cols-2 g-3">
          <div className="col-12 col-lg-9">
            <div className="p-5 bg-steel-10 rounded-3">
              <div className="d-flex">
                <img className="object-contain" src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" width="96" alt="" />
                <div className="ps-3">
                  <div className="fs-3 text-grey-light">BTC Standart Hashrate Token</div>
                  <div className="d-flex align-items-center">
                    <span className="fs-1 text-grey fw-bold">BTCST</span>
                    <span className="ms-3 text-bran bg-lawrence rounded-2 px-3 py-1">Rank: 347</span>
                  </div>
                </div>
              </div>

              <div className="py-3">
                <span className="text-grey">Category: </span>
                <span className="text-jacob">Payments</span>
                <span> | </span>
                <span className="text-jacob">Stablecoin Issuers</span>
              </div>

              <div className="divider my-3" />
              <div className="d-flex align-items-center pb-3">
                <span className="fs-1 text-oz fw-bold">$22.60</span>
                <span className="fs-3 text-success ms-2">+ 4.60%</span>
              </div>

              <div className="bg-lawrence rounded-3 p-4">
                <CoinVolume />
              </div>

              <div className="my-3">
                <Chart />
              </div>

              <CoinPerformance className="row g-3" tokens={tokens} />
              <CoinMarkets className="my-3" tokens={tokens} />

              <div className="divider mt-5" />
              <CoinStats tokens={tokens} />

              <div className="divider mt-5" />
              <CoinInfo />

            </div>
          </div>

          <div className="col-12 col-lg-3">
            <CoinSidebar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coin
