import React from 'react'

function News({ title }) {
  return (
    <div className="card rounded-3 bg-lawrence shadow-sm border-0">
      <div className="card-body rounded-top-3">
        <h5 className="card-title text-warning">
          {title}
        </h5>
        <p className="card-text text-oz">
          Ethereum Price Analysis: ETH Bulls Aim A Test of $2,000
        </p>
        <p className="card-text">
          <small className="text-grey">30 min ago</small>
        </p>
      </div>

      <div className="card-body bg-jeremy border-bottom">
        <p className="card-text text-bran">
          Bitcoin and Big Caps Recover After $400 billion Market Rout
        </p>
        <p className="card-text">
          <small className="text-grey">30 min ago</small>
        </p>
      </div>

      <div className="card-body bg-jeremy rounded-bottom-3">
        <p className="card-text text-bran">
          Bitcoin and Big Caps Recover After $400 billion Market Rout
        </p>
        <p className="card-text">
          <small className="text-grey">30 min ago</small>
        </p>
      </div>
    </div>
  )
}

export default News
