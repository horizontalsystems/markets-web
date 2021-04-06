import React from 'react'
import List from '../List/List'
import { currencyFullValue } from '../../core/helpers'

function CoinVolume({ totalVolume, totalSupply, circulatingSupply, marketCap, dilutedValuation }) {
  return (
    <List>
      <li className="list-group-item bg-lawrence d-flex justify-content-between py-3">
        <div>Volume 24h</div>
        <div>{currencyFullValue(totalVolume)}</div>
      </li>
      <li className="list-group-item bg-lawrence d-flex justify-content-between py-3">
        <div>Market Cap</div>
        <span>{currencyFullValue(marketCap)}</span>
      </li>
      <li className="list-group-item bg-lawrence d-flex justify-content-between py-3">
        <div>In Circulation</div>
        <div>
          {currencyFullValue(circulatingSupply, { thousandSeparated: true, mantissa: 0 })}
        </div>
      </li>
      <li className="list-group-item bg-lawrence d-flex justify-content-between py-3">
        <div>Total Supply</div>
        <div>{currencyFullValue(totalSupply)}</div>
      </li>
      <li className="list-group-item bg-lawrence d-flex justify-content-between py-3">
        <div>Diluted MCap</div>
        <div>{currencyFullValue(dilutedValuation)}</div>
      </li>
    </List>
  )
}

export default CoinVolume
