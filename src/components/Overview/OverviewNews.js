import React from 'react'
import { useSelector } from 'react-redux'
import { selectNewsByType } from '../../core/reducers/news'

import News from '../News/News'

function OverviewNews() {
  const newsCointelegraph = useSelector(state => selectNewsByType(state, 'cointelegraph'))
  const newsTheblock = useSelector(state => selectNewsByType(state, 'theblock'))
  const newsDecrypt = useSelector(state => selectNewsByType(state, 'decrypt'))

  if (
    !newsCointelegraph.length &&
    !newsTheblock.length &&
    !newsDecrypt.length
  ) {
    return null
  }

  return (
    <>
      <h3 className="text-oz pb-2 pt-4 my-2 fw-normal fs-4">
        Top News
      </h3>

      <div className="row g-3">
        <News className="col-lg-4" title="CoinTelegraph" news={newsCointelegraph} />
        <News className="col-lg-4" title="TheBlock" news={newsTheblock} />
        <News className="col-lg-4" title="Decrypt" news={newsDecrypt} />
      </div>
    </>
  )
}

export default OverviewNews
