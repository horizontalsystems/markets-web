import React, { createElement, useState } from 'react'
import Select from 'react-select'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import { percentageFormat, priceColor, volume } from '../../core/helpers'
import Pagination, { paginate, paginateSort } from '../Pagination/Pagination'
import WatchStar from '../Watchlist/WatchStar'
import ListSortHead from './ListSortHead'
import LoaderTable from '../Loader/LoaderTable'

function DefiList({ coins, selectOptions }) {
  const [page, setPage] = useState(1)
  const [sort, setSort] = useState(null)
  const [sortPage, setSortPage] = useState({ field: 'priceChange24h', desc: true })

  const sortedCoins = filterCoins(sort, [...coins])

  const perPage = 50
  const paginatedCoins = paginate(sortedCoins, page, perPage);
  const paginatedCoinsSort = paginateSort(paginatedCoins, sortPage)

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
              <ListSortHead className="pb-2 pt-2 pe-0" field="rank" sort={sortPage} setSort={setSortPage}>
                #
              </ListSortHead>
              <ListSortHead className="pb-2 pt-2" field="name" sort={sortPage} setSort={setSortPage} fieldString>
                Name
              </ListSortHead>
              <ListSortHead className="pb-2 pt-2" field="chain" sort={sortPage} setSort={setSortPage} fieldString>
                Chain
              </ListSortHead>
              <ListSortHead className="text-end pb-2 pt-2" field="priceChange24h" sort={sortPage} setSort={setSortPage}>
                24H
              </ListSortHead>
              <ListSortHead className="text-end pb-2 pt-2" field="priceChange7d" sort={sortPage} setSort={setSortPage}>
                7D
              </ListSortHead>
              <ListSortHead className="text-end pb-2 pt-2" field="tvl" sort={sortPage} setSort={setSortPage}>
                TVL
              </ListSortHead>
            </tr>
            </thead>
            <tbody>
            {coins.length ? paginatedCoinsSort.map(coinMapper) : <LoaderTable rows={5} cols={7} />}
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

function coinMapper({ id, name, rank, image, chain, priceChange24h, priceChange7d, tvl }, index) {
  return (
    <tr key={index}>
      <td className="small pe-0">
        <WatchStar size="16" coin={id} />
      </td>
      <td className="small pe-0">{rank}</td>
      <td>
        <div className="d-flex">
          <img src={image} alt={name} className="me-3" width="24" height="24" />
          {createElement(id ? Link : 'span', {
            to: id ? `/coins/${id}` : undefined,
            className: 'text-bran text-decoration-none'
          }, name)}
        </div>
      </td>
      <td className="">{chain}</td>
      <td className={cn('text-end', priceColor(priceChange24h))}>{percentageFormat(priceChange24h)}</td>
      <td className={cn('text-end', priceColor(priceChange7d))}>{percentageFormat(priceChange7d)}</td>
      <td className="text-end">${volume(tvl)}</td>
    </tr>
  )
}

function filterCoins(filter, list) {
  if (!filter) {
    return list
  }

  return list.filter(item => item.chain === filter.value)
}

export default DefiList
