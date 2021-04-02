import React from 'react'
import cn from 'classnames'

import { Link } from 'react-router-dom'
import { currency, percentage, priceColor } from '../../core/helpers'
import { ArrowRight } from '../Icon'

import CardHead from '../Card/CardHead'
import Card from '../Card/Card'
import Table from '../Table/Table'

function OverviewTvlChange({ title, headIcon: Icon, tokens }) {
  return (
    <Card className="h-100">
      <CardHead
        title={title}
        icon={<Icon className="me-2" />}
        action={<div className="d-flex align-items-center text-grey" role="button">
          <span>See All</span><ArrowRight className="ps-1" />
        </div>}
      />

      <Table>
        <thead>
        <tr className="small text-grey">
          <td className="pb-2 pt-2 pe-0">#</td>
          <td className="pb-2 pt-2">Name</td>
          <td className="text-end pb-2 pt-2">TVL</td>
          <td className="text-end pb-2 pt-2">24H</td>
        </tr>
        </thead>
        <tbody>
        {tokens.map(({ id, tvl, change_1d, symbol, name, logo }, index) => {
            const title = symbol === '-' ? name : symbol

            return (
              <tr key={index}>
                <td className="small pe-0">{index + 1}</td>
                <td>
                  <div className="d-flex">
                    {logo && <img src={logo} alt={symbol} className="me-3" width="24" height="24" />}
                    <Link to={`/coins/${id}`} className="text-bran text-decoration-none text-uppercase">{title}</Link>
                  </div>
                </td>
                <td className="text-end">
                  {currency(tvl)}
                </td>
                <td className={cn('text-end', priceColor(change_1d))}>
                  {percentage(change_1d)}
                </td>
              </tr>
            )
          }
        )}
        </tbody>
      </Table>
    </Card>
  )
}

export default OverviewTvlChange
