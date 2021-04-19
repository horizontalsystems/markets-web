import React, { useState } from 'react'
import Select from 'react-select'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import { currencyFullValue, percentageFormat, priceColor, volume } from '../../core/helpers'
import Pagination, { paginate } from '../Pagination/Pagination'

function CoinList({ coins }) {
  const [sort, setSort] = useState(null)
  const [page, setPage] = useState(1)

  const sortedCoins = sortCoins(sort, coins)

  const perPage = 50
  const currentCoins = paginate(sortedCoins, page, perPage);

  return (
    <div className="container">
      <div className="card border-0 shadow-sm bg-lawrence p-3 pt-0 h-100 w-100 mt-4">
        <div className="row">
          <div className="col-md-3">
            <Select
              className="mt-3"
              placeholder="Highest Cap"
              value={sort}
              onChange={value => {
                setSort(value)
                setPage(1)
              }}
              isSearchable={false}
              options={[
                { field: 'marketCap', value: 'h_cap', label: 'Highest Cap' },
                { field: 'marketCap', value: 'l_cap', label: 'Lowest Cap' },
                { field: 'totalVolume', value: 'h_volume', label: 'Highest Volume' },
                { field: 'totalVolume', value: 'l_volume', label: 'Lowest Volume' },
                { field: 'price', value: 'h_price', label: 'Highest Price' },
                { field: 'price', value: 'l_price', label: 'Lowest Price' },
                { field: 'priceChange24h', value: 't_gainers', label: 'Top Gainers' },
                { field: 'priceChange24h', value: 't_losers', label: 'Top Losers' }
              ]}
            />
          </div>
        </div>
        <div className="table-responsive mt-3 border-top border-bottom">
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
            {currentCoins.map(({ id, name, rank, image, price, marketCap, totalVolume, priceChange24h, priceChange7d }, index) => (
              <tr key={index}>
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
                <td className={cn('text-end', priceColor(priceChange24h))}>{percentageFormat(priceChange24h)}</td>
                <td className={cn('text-end', priceColor(priceChange7d))}>{percentageFormat(priceChange7d)}</td>
                <td className="text-end">${volume(marketCap)}</td>
                <td className="text-end">${volume(totalVolume)}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
        <nav className="mt-3">
          <Pagination totalCount={sortedCoins.length} perPage={perPage} page={page} onClick={setPage} />
        </nav>
      </div>
    </div>
  )
}

function sortCoins(filter, list) {
  if (!filter) {
    return list
  }

  const { value, field } = filter
  switch (value) {
    case 'h_cap':
    case 'h_volume':
    case 'h_price':
    case 't_gainers': {
      return list.sort((a, b) => b[field] - a[field])
    }
    case 'l_cap':
    case 'l_volume':
    case 'l_price':
    case 't_losers': {
      return list.sort((a, b) => a[field] - b[field])
    }
    default:
      return list
  }
}

export default CoinList
