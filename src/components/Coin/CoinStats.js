import React from 'react'
import Card from '../Card/Card'
import CardHead from '../Card/CardHead'
import Table from '../Table/Table'
import { Copy } from '../Icon'

function CoinStats({ funds = [], holders = [] }) {
  if (!funds.length && !holders.length) {
    return null
  }

  return (
    <div className="mt-3">
      {funds.length > 0 && <div className="mb-3">
        <Card className="h-100">
          <CardHead title="Funds Invested" />
          <Table>
            <thead>
            <tr className="small text-grey">
              <td className="pb-2 pt-2">Fund</td>
              <td className="text-end pb-2 pt-2">Website</td>
            </tr>
            </thead>
            <tbody>
            {funds.map(fund =>
              <tr key={fund.name}>
                <td>{fund.name}</td>
                <td className="text-end text-warning">
                  <a href={fund.url} target="_blank" rel="noreferrer">{fund.url}</a>
                </td>
              </tr>)}
            </tbody>
          </Table>
        </Card>
      </div>}

      {holders.length > 0 && <div className="mb-3">
        <Card className="h-100">
          <CardHead title="Major Holders" />
          <Table>
            <thead>
            <tr className="small text-grey">
              <td className="pb-2 pt-2">Adress</td>
              <td className="text-end pb-2 pt-2">Percent</td>
            </tr>
            </thead>
            <tbody>
            {holders.map(({ address, percent }, index) => (
              <tr key={index}>
                <td>
                  <div className="d-flex align-items-center">
                    <Copy className="me-2" />
                    {address}
                  </div>
                </td>
                <td className="text-end">{percent}</td>
              </tr>
            ))}
            </tbody>
          </Table>
        </Card>
      </div>}
    </div>
  )
}

export default CoinStats
