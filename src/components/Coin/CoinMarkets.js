import React, { useState } from 'react'
import { currencyFullValue } from '../../core/helpers'
import { ArrowRight } from '../Icon'

import CardHead from '../Card/CardHead'
import Table from '../Table/Table'
import Card from '../Card/Card'

function CoinMarkets({ className, markets }) {
  const [isFull, showFull] = useState(false)
  const tickers = isFull ? markets : markets.slice(0, 5)

  return (
    <Card className={className}>
      <CardHead title="Markets" action={
        <div className="d-flex align-items-center text-grey" role="button" onClick={() => showFull(!isFull)}>
          <span>{isFull ? 'Show top 5' : 'Show all'}</span>
          <ArrowRight className="ps-1" />
        </div>}
      />
      <Table>
        <thead>
        <tr className="small text-grey">
          <td className="pb-2 pt-2 pe-0">#</td>
          <td className="pb-2 pt-2">Source</td>
          <td className="pb-2 pt-2">Pairs</td>
          <td className="text-end pb-2 pt-2">Price</td>
          <td className="text-end pb-2 pt-2">Volume</td>
        </tr>
        </thead>
        <tbody>
        {tickers.map((data, index) => (
          <tr key={index}>
            <td className="small pe-0">{index + 1}</td>
            <td>
              <div className="d-flex">
                {data.name}
              </div>
            </td>
            <td>{data.pair}</td>
            <td className="text-end">{currencyFullValue(data.price)}</td>
            <td className="text-end">{currencyFullValue(data.volume)}</td>
          </tr>
        ))}
        </tbody>
      </Table>
    </Card>
  )
}

export default CoinMarkets
