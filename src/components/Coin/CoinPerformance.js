import React from 'react'
import cn from 'classnames'
import { currencyFullValue, percentageFormat, priceColor } from '../../core/helpers'
import { ReactComponent as BTC } from '../Icon/coins/btc.svg'
import { ReactComponent as ETH } from '../Icon/coins/eth.svg'
import { ReactComponent as BNB } from '../Icon/coins/bnb.svg'
import { ReactComponent as USD } from '../Icon/coins/usd.svg'

import Card from '../Card/Card'
import CardHead from '../Card/CardHead'
import Table from '../Table/Table'

function CoinPerformance({ isFetching, performance, priceRanges }) {
  return (
    <div className="row g-3">
      <div className="col-lg-6">
        <Card className="h-100">
          <CardHead title="Price Range" />
          <div className="d-flex flex-column justify-content-between h-100 pt-3">
            {isFetching ? <PerformanceSpinner /> : priceRanges.map(item => (
              <PerformanceChange
                className="mt-md-4 mb-2"
                key={item.type}
                range={item}
                type={item.type}
              />
            ))}
          </div>
        </Card>
      </div>

      <div className="col-lg-6">
        <Card>
          <CardHead title="Performance" />
          {isFetching ? <div className="pt-3"><PerformanceSpinner /></div> :
            <Table>
              <thead>
              <tr className="small text-grey">
                <td className="pb-2 pt-2">VS</td>
                <td className="text-end pb-2 pt-2">1W</td>
                <td className="text-end pb-2 pt-2">1M</td>
              </tr>
              </thead>
              <tbody>
              {performance.map((data, index) => (
                <tr key={index}>
                  <td className="text-bran text-uppercase d-flex align-items-center">
                    <CoinIcon code={data.code} />{data.code}
                  </td>
                  <td className={cn('text-end', priceColor(data['1w']))}>
                    {percentageFormat(data['1w'], null, 0)}
                  </td>
                  <td className={cn('text-end', priceColor(data['1m']))}>
                    {percentageFormat(data['1m'], null, 0)}
                  </td>
                </tr>
              ))}
              </tbody>
            </Table>}
        </Card>
      </div>
    </div>
  )
}

function CoinIcon({ code }) {
  switch (code) {
    case 'btc':
      return <BTC className="me-3" />
    case 'eth':
      return <ETH className="me-3" />
    case 'bnb':
      return <BNB className="me-3" />
    case 'usd':
      return <USD className="me-3" />
    default:
      return ''
  }
}

function PerformanceChange({ className, range, type }) {
  return (
    <div className={className}>
      <div className="progress bg-jeremy" style={{ height: '4px' }}>
        <div style={{ width: `${range.value}%` }}
             className="progress-bar bg-warning"
             role="progressbar"
             aria-valuenow={range.value}
             aria-valuemin="0"
             aria-valuemax="100" />
      </div>
      <div className="d-flex justify-content-between mt-2">
        <small className="text-bran">
          {currencyFullValue(range.min, { thousandSeparated: true, mantissa: 4, optionalMantissa: true })}
        </small>
        <small className="text-muted">{type}</small>
        <small className="text-bran">
          {currencyFullValue(range.max, { thousandSeparated: true, mantissa: 4, optionalMantissa: true })}
        </small>
      </div>
    </div>
  )
}

function PerformanceSpinner() {
  return (
    <div className="text-center m-5">
      <div className="spinner-border text-white" role="status" />
    </div>
  )
}

export default CoinPerformance
