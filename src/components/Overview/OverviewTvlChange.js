import React, { createElement } from 'react'
import cn from 'classnames'

import { Link } from 'react-router-dom'
import { currencyFormat, percentageFormat, priceColor } from '../../core/helpers'
import { ArrowRight } from '../Icon'

import LoaderTable from '../Loader/LoaderTable'
import CardHead from '../Card/CardHead'
import Card from '../Card/Card'
import Table from '../Table/Table'

function OverviewTvlChange({ title, headIcon: Icon, tokens, seeMorePath }) {
  return (
    <Card className="h-100">
      <CardHead
        title={title}
        icon={<Icon className="me-2" />}
        action={
          <Link to={seeMorePath} className="d-flex align-items-center text-grey text-decoration-none">
            <span>See All</span><ArrowRight className="ms-2" />
          </Link>
        }
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
        {tokens.length ? tokens.map(coinMapper) : <LoaderTable cols={4} rows={5} />}
        </tbody>
      </Table>
    </Card>
  )
}

function coinMapper({ id, symbol, image, tvl, priceChange24h }, index) {
  return (
    <tr key={index}>
      <td className="small pe-0">{index + 1}</td>
      <td>
        <div className="d-flex">
          {image && <img src={image} alt={symbol} className="me-3" width="24" height="24" />}
          {createElement(id ? Link : 'span', {
            to: id ? `/coins/${id}` : undefined,
            className: 'text-bran text-decoration-none text-uppercase'
          }, symbol)}
        </div>
      </td>
      <td className="text-end text-nowrap">
        {currencyFormat(tvl)}
      </td>
      <td className={cn('text-end', priceColor(priceChange24h))}>
        {percentageFormat(priceChange24h)}
      </td>
    </tr>
  )
}

export default OverviewTvlChange
