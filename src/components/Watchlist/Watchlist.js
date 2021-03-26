import React from 'react'
import HeaderTabs from '../Header/HeaderTab'

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
]

function Watchlist() {
  return (
    <div className="Watchlist">
      <HeaderTabs active="/watchlist" />

      <div className="py-5">

        <div className="container">
          <div className="card border-0 shadow-sm bg-lawrence p-3 h-100 w-100 mt-4">
            <div className="pb-3 border-bottom fw-500">
              <div className="dropdown">
                <button className="btn dropdown-toggle text-oz" type="button" id="filter" data-bs-toggle="dropdown" aria-expanded="false">
                  Highest Cap
                </button>
                <ul className="dropdown-menu" aria-labelledby="filter">
                  <li><span className="dropdown-item">Price</span></li>
                  <li><span className="dropdown-item">Volume</span></li>
                  <li><span className="dropdown-item">Change</span></li>
                </ul>
              </div>
            </div>

            <div className="row row-rows-1 g-0">
              <div className="col-3">
                <table className="table table-borderless mb-0 table-zebra text-bran">
                  <thead>
                  <tr className="small text-grey">
                    <td className="pb-2 pt-2 pe-0">#</td>
                    <td className="pb-2 pt-2">Name</td>
                  </tr>
                  </thead>
                  <tbody>
                  {tokens.map(({ name, image }, index) => (
                    <tr key={index}>
                      <td className="small pe-0">{index + 1}</td>
                      <td>
                        <div className="d-flex">
                          <img src={image} alt={name} className="me-3" width="24" height="24" />
                          <span className="text-uppercase">{name}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                  </tbody>
                </table>
              </div>
              <div className="col-9 table-responsive">
                <table className="table table-borderless mb-0 table-zebra text-bran">
                  <thead>
                  <tr className="small text-grey">
                    <td className="text-end pb-2 pt-2">Price</td>
                    <td className="text-end pb-2 pt-2">24H</td>
                    <td className="text-end pb-2 pt-2">7D</td>
                    <td className="text-end pb-2 pt-2">Market Cap</td>
                    <td className="text-end pb-2 pt-2">Volume</td>
                  </tr>
                  </thead>
                  <tbody>
                  {tokens.map(({ current_price, market_cap, total_volume, price_change_24h, price_change_percentage_24h }, index) => (
                    <tr key={index}>
                      <td className="text-end">{current_price}</td>
                      <td className="text-end text-success">{price_change_24h}</td>
                      <td className="text-end text-success">{price_change_percentage_24h}</td>
                      <td className="text-end text-success">{market_cap}</td>
                      <td className="text-end text-success">{total_volume}</td>
                    </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Watchlist
