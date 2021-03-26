import React from 'react'
import Card from '../Card/Card'
import CardHead from '../Card/CardHead'
import Table from '../Table/Table'
import Ratings from '../Ratings/Ratings'
import { Copy } from '../Icon'

const holders = [
  { address: '0x0d4987...b4ead44d1', percent: '8%' },
  { address: '0x912fd2...b41477ba0', percent: '5%' },
  { address: '0x2d1211...cd4158202', percent: '2%' }
]

const audits = [
  { date: '22.12.2009', by: 'Certik' },
  { date: '22.12.2020', by: 'Certik' },
]

function CoinStats({ tokens }) {
  return (
    <>
      <h3 className="text-oz pb-3 pt-4">
        Rating Stats
      </h3>
      <p className="text-oz">
        A - Excellent cryptocurrency and worldwide payment system. It is the first decentralized digital currency, as the system works
        without
        a central bank or single administrator.
      </p>
      <div className="row g-3">
        <div className="col-lg-6">
          <Card>
            <CardHead title="User Activity" action={<Ratings rate="5" />} />
            <div className="row">
              <div className="col">
                <div className="text-grey mt-2">Total Users</div>
                <div className="divider my-2" />
                <div className="text-bran">263,708,818</div>
              </div>
              <div className="col">
                <div className="text-grey mt-2">Active users</div>
                <div className="divider my-2" />
                <div className="text-bran">163,708,818</div>
              </div>
            </div>
          </Card>
        </div>
        <div className="col-lg-6">
          <Card>
            <CardHead title="Liquidity" action={<Ratings rate="2" />} />
            <div className="row">
              <div className="col">
                <div className="text-grey mt-2">Transfer volume (24h)</div>
                <div className="divider my-2" />
                <div className="text-bran">263,708,818</div>
              </div>
              <div className="col">
                <div className="text-grey mt-2">Uniswap Liquidity</div>
                <div className="divider my-2" />
                <div className="text-bran">163,708,818</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="row g-3 my-3">
        <div className="col-lg-6">
          <Card className="h-100">
            <CardHead title="Major Holders" action={<Ratings rate="3" />} />
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
        </div>
        <div className="col-lg-6">
          <Card className="h-100">
            <CardHead title="Audits" action={<Ratings rate="2" />} />
            <Table>
              <thead>
              <tr className="small text-grey">
                <td className="pb-2 pt-2">Date</td>
                <td className="text-end pb-2 pt-2">By</td>
              </tr>
              </thead>
              <tbody>
              {audits.map(({ date, by }, index) => (
                <tr key={index}>
                  <td>
                    <div className="d-flex">
                      {date}
                    </div>
                  </td>
                  <td className="text-end text-warning">{by}</td>
                </tr>
              ))}
              </tbody>
            </Table>
          </Card>
        </div>
      </div>
    </>
  )
}

export default CoinStats
