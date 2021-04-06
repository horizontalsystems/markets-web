import React from 'react'
import cn from 'classnames'

import { Link } from 'react-router-dom'
import { currencyFullValue, percentageFormat, priceColor, volume } from '../../core/helpers'

function CoinList({ coins }) {
  return (
    <div className="container">
      <div className="card border-0 shadow-sm bg-lawrence p-3 h-100 w-100 mt-4">
        <div className="pb-3 border-bottom fw-500">
          <div className="dropdown">
            <button className="btn dropdown-toggle text-oz" id="filter" data-bs-toggle="dropdown" aria-expanded="false">
              Highest Cap
            </button>
            <ul className="dropdown-menu" aria-labelledby="filter">
              <li><span className="dropdown-item">Price</span></li>
              <li><span className="dropdown-item">Volume</span></li>
              <li><span className="dropdown-item">Change</span></li>
            </ul>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-borderless mb-0 table-zebra text-bran">
            <thead>
            <tr className="small text-grey">
              <td className="pb-2 pt-2 pe-0">#</td>
              <td className="pb-2 pt-2">Name</td>
              <td className="text-end pb-2 pt-2">Price</td>
              <td className="text-end pb-2 pt-2">24H</td>
              <td className="text-end pb-2 pt-2">7D</td>
              <td className="text-end pb-2 pt-2">Market Cap</td>
              <td className="text-end pb-2 pt-2">Volume</td>
            </tr>
            </thead>
            <tbody>
            {coins.map(({ id, name, rank, image, price, marketCap, totalVolume, priceChange24h, priceChange7d }) => (
              <tr key={id}>
                <td className="small pe-0">{rank}</td>
                <td>
                  <div className="d-flex">
                    <img src={image} alt={name} className="me-3" width="24" height="24" />
                    <Link to={`/coins/${id}`} className="text-bran text-decoration-none">
                      {name}
                    </Link>
                  </div>
                </td>
                <td className="text-end">{currencyFullValue(price)}</td>
                <td
                  className={cn('text-end', priceColor(priceChange24h))}>{percentageFormat(priceChange24h)}</td>
                <td
                  className={cn('text-end', priceColor(priceChange7d))}>{percentageFormat(priceChange7d)}</td>
                <td className="text-end">${volume(marketCap)}</td>
                <td className="text-end">${volume(totalVolume)}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CoinList
