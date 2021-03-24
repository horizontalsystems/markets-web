import React from 'react'
import { Link } from 'react-router-dom'
import CardHead from '../Card/CardHead'
import Table from '../Table/Table'
import Card from '../Card/Card'

function CoinMarkets({ className, tokens }) {
  return (
    <Card className={className}>
      <CardHead title="Markets" />
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
        {tokens.map(({ id, name, current_price, price_change_24h, image }, index) => (
          <tr key={index}>
            <td className="small pe-0">{index + 1}</td>
            <td>
              <div className="d-flex">
                <img src={image} alt={name} className="me-3" width="24" height="24" />
                <Link to={`/coin/${id}`} className="text-bran text-decoration-none">{name}</Link>
              </div>
            </td>
            <td>{name}</td>
            <td className="text-end">{price_change_24h}</td>
            <td className="text-end">{price_change_24h}</td>
          </tr>
        ))}
        </tbody>
      </Table>
    </Card>
  )
}

export default CoinMarkets
