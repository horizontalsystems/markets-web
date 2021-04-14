import React from 'react'
import cn from 'classnames'

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
        <span className="page-link">Prev</span>
      </li>
      {pages}
      <li role="button" className={cn('page-item', { disabled: page === pages.length })} onClick={() => onChangePage(page + 1)}>
        <span className="page-link">Next</span>
      </li>
    </ul>
  )
}

export default Pagination
