import React from 'react'
import { Link } from 'react-router-dom'

function CoinCategories({ categories }) {
  if (!categories || !categories.length) {
    return null
  }

  const list = []
  categories.forEach((category, i) => {
    list.push(<Link key={i} to={`/discovery/${category}`} className="text-jacob text-capitalize text-decoration-none px-2">{category}</Link>)
    if (i !== categories.length - 1) {
      list.push(<span key={`${i}-sep`}> | </span>)
    }
  })

  return (
    <div className="py-3">
      <span className="text-grey">Category: </span>
      {list}
    </div>
  )
}

export default CoinCategories
