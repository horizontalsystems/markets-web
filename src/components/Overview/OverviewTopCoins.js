import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from '../Icon'
import CardHead from '../Card/CardHead'
import Card from '../Card/Card'
import Table from '../Table/Table'

function OverviewTopCoins({ title, headIcon: Icon, tokens, seeAllRoute }) {
  return (
    <Card>
      <CardHead
        title={title}
        icon={<Icon className="me-2" />}
        action={seeAllRoute && <div className="d-flex align-items-center text-grey">
          <span>See All</span><ArrowRight className="ps-1" />
        </div>}
      />

      <Table>
        <thead>
        <tr className="small text-grey">
          <td className="pb-2 pt-2 pe-0">#</td>
          <td className="pb-2 pt-2">Name</td>
          <td className="text-end pb-2 pt-2">Price</td>
          <td className="text-end pb-2 pt-2">24H</td>
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
  )
}

export default OverviewTopCoins
