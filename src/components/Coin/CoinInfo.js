import React from 'react'
import Card from '../Card/Card'
import { ArrowRight, Guide } from '../Icon'

function CoinInfo() {
  return (
    <>
      <h3 className="text-oz pb-3 pt-4">
        About
      </h3>
      <p className="text-oz">
        Bitcoin is a cryptocurrency and worldwide payment system. It is the first decentralized digital currency, as the system works without
        a central bank or single administrator. Bitcoin is a cryptocurrency and worldwide payment system. It is the first decentralized
        digital currency, as the system works without a central bank or single administrator.
      </p>

      <div className="row g-3">
        <div className="col-lg-6">
          <Card className="py-2">
            <div className="fw-500 px-0 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center text-oz">
                <Guide className="me-2" />
                <span className="text-oz">Guide</span>
              </div>

              <ArrowRight />
            </div>
          </Card>
        </div>
        <div className="col-lg-6">
          <Card className="py-2">
            <div className="fw-500 px-0 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center text-oz">
                <Guide className="me-2" />
                <span className="text-oz">Whitepaper</span>
              </div>

              <ArrowRight />
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

export default CoinInfo
