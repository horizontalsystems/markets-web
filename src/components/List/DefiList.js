import React, { useState } from 'react'
import Select from 'react-select'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import { percentageFormat, priceColor, volume } from '../../core/helpers'
import Pagination, { paginate } from '../Pagination/Pagination'
import WatchStar from '../Watchlist/WatchStar'

function DefiList({ coins, selectOptions }) {
  const [sort, setSort] = useState(null)
  const [page, setPage] = useState(1)

  const sortedCoins = filterCoins(sort, coins)

  const perPage = 50
  const currentCoins = paginate(sortedCoins, page, perPage);

  return (
    <div className="container">
      <div className="card border-0 shadow-sm bg-lawrence p-3 pt-0 h-100 w-100 mt-4">
        <div className="row">
          <div className="col-md-3">
            <Select
              className="mt-3"
              placeholder="Select chain"
              value={sort}
              onChange={value => {
                setSort(value)
                setPage(1)
              }}
              isSearchable={false}
              options={selectOptions}
            />
          </div>
        </div>
        <div className="table-responsive mt-3 border-top border-bottom">
          <table className="table table-borderless mb-0 table-zebra text-bran">
            <thead>
            <tr className="small text-grey">
              <td className="p-0 m-0" />
              <td className="pb-2 pt-2 pe-0">#</td>
              <td className="pb-2 pt-2">Name</td>
              <td className="pb-2 pt-2">Chain</td>
              <td className="text-end pb-2 pt-2">24H</td>
              <td className="text-end pb-2 pt-2">7D</td>
              <td className="text-end pb-2 pt-2">TVL</td>
            </tr>
            </thead>
            <tbody>
            {currentCoins.map(({ id, name, rank, image, chain, priceChange24h, priceChange7d, tvl }, index) => (
              <tr key={index}>
                <td className="small pe-0">
                  <WatchStar size="16" coin={id} />
                </td>
                <td className="small pe-0">{rank}</td>
                <td>
                  <div className="d-flex">
                    <img src={image} alt={name} className="me-3" width="24" height="24" />
                    <Link to={id ? `/coins/${id}` : '/'} className="text-bran text-decoration-none">
                      {name}
                    </Link>
                  </div>
                </td>
                <td className="">{chain}</td>
                <td className={cn('text-end', priceColor(priceChange24h))}>{percentageFormat(priceChange24h)}</td>
                <td className={cn('text-end', priceColor(priceChange7d))}>{percentageFormat(priceChange7d)}</td>
                <td className="text-end">${volume(tvl)}</td>
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

function filterCoins(filter, list) {
  if (!filter) {
    return list
  }

  return list.filter(item => item.chain === filter.value)
}

export default DefiList
