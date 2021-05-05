import React from 'react'
import Card from '../Card/Card'
import { ArrowRight, Guide } from '../Icon'

function CoinInfo({ description, guide, whitepaper }) {
  return (
    <>
      <div className="divider mt-5" />
      <h3 className="text-oz pb-3 pt-4">
        About
      </h3>
      <p
        className="text-oz pt-2 pb-4"
        dangerouslySetInnerHTML={{ __html: description }}
      />

      <div className="row g-3">
        {guide && <div className="col-lg-6">
          <Card className="py-2">
            <div className="fw-500 px-0 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center text-oz">
                <Guide className="me-2" />
                <span className="text-oz">Guide</span>
              </div>

              <ArrowRight />
            </div>
          </Card>
        </div>}
        {whitepaper && <div className="col-lg-6">
          <Card className="py-2">
            <div className="fw-500 px-0 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center text-oz">
                <Guide className="me-2" />
                <span className="text-oz">Whitepaper</span>
              </div>

              <ArrowRight />
            </div>
          </Card>
        </div>}
      </div>
    </>
  )
}

export default CoinInfo
