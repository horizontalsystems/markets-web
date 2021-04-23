import React from 'react'
import List from '../List/List'
import { currencyFullValue } from '../../core/helpers'

function CoinVolume({ totalVolume, totalSupply, circulatingSupply, marketCap, dilutedValuation }) {
  return (
    <List>
      <li className="list-group-item bg-lawrence d-flex justify-content-between py-3">
        <div className="text-grey">Volume 24h</div>
        <div className="text-oz">{currencyFullValue(totalVolume)}</div>
      </li>
      <li className="list-group-item bg-lawrence d-flex justify-content-between py-3">
        <div className="text-grey">Market Cap</div>
        <span className="text-oz">{currencyFullValue(marketCap)}</span>
      </li>
      <li className="list-group-item bg-lawrence d-flex justify-content-between py-3">
        <div className="text-grey">In Circulation</div>
        <div className="text-oz">
          {currencyFullValue(circulatingSupply, { thousandSeparated: true, mantissa: 0 })}
        </div>
      </li>
      <li className="list-group-item bg-lawrence d-flex justify-content-between py-3">
        <div className="text-grey">Total Supply</div>
        <div className="text-oz">{currencyFullValue(totalSupply)}</div>
      </li>
      <li className="list-group-item bg-lawrence d-flex justify-content-between py-3">
        <div className="text-grey">Diluted MCap</div>
        <div className="text-oz">{currencyFullValue(dilutedValuation)}</div>
      </li>
    </List>
  )
}

export default CoinVolume
