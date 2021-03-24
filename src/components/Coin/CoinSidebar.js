import React from 'react'
import { ReactComponent as RateA } from './rate-a.svg'
import Ratings from '../Ratings/Ratings'

function CoinSidebar() {
  return (
    <>
      <div className="card bg-lawrence rounded-3 border-0">
        <RateA className="mt-3 mx-3" />
        <small className="px-3 mt-5 text-bran">
          <b>Excellent</b> - Ratings follow a specialized rating system to represent the quality and risk
        </small>

        <ul className="list-group list-group-flush mt-3 rounded-bottom-3">
          <li className="list-group-item bg-lawrence text-oz border-top d-flex justify-content-between">
            User Activity <Ratings rate="2" />
          </li>
          <li className="list-group-item bg-lawrence text-oz d-flex justify-content-between">
            Liquidity <Ratings rate="2" />
          </li>
          <li className="list-group-item bg-lawrence text-oz d-flex justify-content-between">
            Major Holders <Ratings rate="2" />
          </li>
          <li className="list-group-item bg-lawrence text-oz d-flex justify-content-between">
            Audits <Ratings rate="2" />
          </li>
        </ul>
      </div>

      <div className="card py-2 px-3 my-3 bg-lawrence rounded-3 border-0">
        <div className="fw-500 d-flex justify-content-between align-items-center">
          <div className="d-flex text-oz">
            Add to Watchlist
          </div>
        </div>
      </div>

      <ul className="list-group list-group-flush bg-steel-10 rounded-3">
        <li className="list-group-item bg-lawrence text-oz">Website</li>
        <li className="list-group-item bg-lawrence text-oz">Twitter</li>
        <li className="list-group-item bg-lawrence text-oz">Reddit</li>
        <li className="list-group-item bg-lawrence text-oz">Telegram</li>
        <li className="list-group-item bg-lawrence text-oz">Github</li>
      </ul>
    </>
  )
}

export default CoinSidebar
