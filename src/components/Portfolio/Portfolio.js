import React from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { ReactComponent as AddWallet } from './add-wallet.svg'
import { ReactComponent as Clock } from './clock.svg'
import { ReactComponent as Performance } from './performance.svg'

function Portfolio() {
  return (
    <div className="App">
      <Header activeTab="/portfolio" />
      <div className="container d-flex justify-content-center">
        <div className="w-50 text-center">
          <h1 className="text-warning mt-5">
            Coming soon!
          </h1>
          <p className="py-4 text-oz">
            Accurately tracking the investment performance of your crypto assets is complicated
            <br />
            You connect your wallets, and we do it for you.
          </p>

          <div className="row g-3">
            <div className="col-sm-12 col-md-4">
              <div className="card bg-lawrence">
                <div className="card-body">
                  <AddWallet />
                  <div className="mt-3 text-white">
                    Multi Wallet <br />
                    Tracker
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="card bg-lawrence">
                <div className="card-body">
                  <Clock />
                  <div className="mt-3 text-white">
                    Real-time <br /> price data
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="card bg-lawrence">
                <div className="card-body">
                  <Performance />
                  <div className="mt-3 text-white">
                    Performance <br />
                    Tracker
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-grey my-5">
            Follow us on <a href="https://twitter.com/unstoppablebyhs" rel="noreferrer nofollow" target="_blank">Twitter</a> and stay tuned for updates!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Portfolio
