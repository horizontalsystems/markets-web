import React from 'react'
import cn from 'classnames'
import { ArrowLeft, ArrowRight } from '../Icon'
import './Pagination.scss'

function Pagination({ totalCount, perPage, page, onClick }) {
  if (totalCount <= perPage) {
    return null
  }

  const pages = []
  const itemsPerPage = Math.ceil(totalCount / perPage)
  const onChangePage = number => {
    if (number >= 1 && number <= pages.length) {
      onClick(number)
    }
  }

  for (let i = 1; i <= itemsPerPage; i++) {
    const active = page === i
    pages.push(
      <li role="button" key={i} className={cn('page-item', { active })} onClick={() => onChangePage(i)}>
        <span className="page-link">{i}</span>
      </li>)
  }

  return (
    <ul className="pagination">
      <li role="button" className={cn('page-item', { disabled: page === 1 })} onClick={() => onChangePage(page - 1)}>
        <span className="page-link"><ArrowLeft /></span>
      </li>
      {pages}
      <li role="button" className={cn('page-item', { disabled: page === pages.length })} onClick={() => onChangePage(page + 1)}>
        <span className="page-link"><ArrowRight /></span>
      </li>
    </ul>
  )
}

export function paginate(coins, page, perPage) {
  const perPageNumber = coins.length <= perPage ? coins.length : perPage
  const indexOfLastCoin = page * perPageNumber
  const indexOfFirstCoin = indexOfLastCoin - perPageNumber

  return coins.slice(indexOfFirstCoin, indexOfLastCoin)
}

export function paginateSort(coins, { desc, field, fieldString }) {
  if (!field) {
    return coins
  }

  return coins.sort((a, b) => {
    const itemA = a[field]
    const itemB = b[field]

    if (fieldString) {
      return desc ? `${itemA}`.localeCompare(itemB) : `${itemB}`.localeCompare(itemA)
    }

    return desc ? itemB - itemA : itemA - itemB
  })
}

export default Pagination
