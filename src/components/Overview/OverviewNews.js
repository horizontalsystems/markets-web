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
      <h3 className="text-oz pb-3 pt-4">
        News
      </h3>

      <div className="row g-3">
        <div className="col-lg-4">
          <News title="CoinTelegraph" news={newsCointelegraph} />
        </div>
        <div className="col-lg-4">
          <News title="TheBlock" news={newsTheblock} />
        </div>
        <div className="col-lg-4">
          <News title="Decrypt" news={newsDecrypt} />
        </div>
      </div>
    </>
  )
}

export default OverviewNews
