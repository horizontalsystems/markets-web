import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card/Card'
import CardHead from '../Card/CardHead'
import Table from '../Table/Table'

function CoinPerformance({ className, tokens }) {
  return (
    <div className={className}>
      <div className="col-lg-6">
        <Card className="h-100">
          <CardHead title="Price Range" />
          <div className="d-flex flex-column justify-content-between h-100 pt-3">
            <PerformanceChange className="mt-1" type="24h Range" value="75" min="$19,837.65" max="$19,837.65" />
            <PerformanceChange className="mt-3" type="52w Range" value="35" min="$19,837.65" max="$19,837.65" />
            <PerformanceChange className="mt-3" type="All Time" value="95" min="$19,837.65" max="$19,837.65" />
          </div>
        </Card>
      </div>

      <div className="col-lg-6">
        <Card>
          <CardHead title="Performance" />
          <Table>
            <thead>
            <tr className="small text-grey">
              <td className="pb-2 pt-2 pe-0">#</td>
              <td className="pb-2 pt-2">Name</td>
              <td className="text-end pb-2 pt-2">1W</td>
              <td className="text-end pb-2 pt-2">1M</td>
            </tr>
            </thead>
            <tbody>
            {tokens.map(({ id, name, current_price, price_change_24h, image }, index) => (
              <tr key={index}>
                <td className="small pe-0">{index + 1}</td>
                <td>
                  <div className="d-flex">
                    <img src={image} alt={name} className="me-3" width="24" height="24" />
                    <Link to={`/coin/${id}`} className="text-bran text-decoration-none">{name}</Link>
                  </div>
                </td>
                <td className="text-end">{current_price}</td>
                <td className="text-end text-success">{price_change_24h}</td>
              </tr>
            ))}
            </tbody>
          </Table>
        </Card>
      </div>
    </div>
  )
}

function PerformanceChange({ className, value, min, max, type }) {
  return (
    <div className={className}>
      <div className="progress" style={{ height: '4px' }}>
        <div style={{ width: `${value}%` }}
             className="progress-bar bg-warning"
             role="progressbar"
             aria-valuenow={value}
             aria-valuemin="0"
             aria-valuemax="100" />
      </div>
      <div className="d-flex justify-content-between mt-2">
        <small className="text-bran">{min}</small>
        <small className="text-muted">{type}</small>
        <small className="text-bran">{max}</small>
      </div>
    </div>
  )
}

export default CoinPerformance
