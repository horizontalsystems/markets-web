import React from 'react'

import { ReactComponent as HsLogo } from './HsLogo.svg'
import './Footer.scss'

function Footer() {
  return (
    <footer className="Footer bg-dark py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <ul className="list-unstyled">
              <li>
                <a className="text-muted text-decoration-none" href="/">Home</a>
              </li>
              <li>
                <a className="text-muted text-decoration-none" href="/">About</a>
              </li>
              <li>
                <a className="text-muted text-decoration-none" href="/">Contact</a>
              </li>
              <li>
                <a className="text-muted text-decoration-none" href="/">Unstopabble Wallet</a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 text-muted small">
            <div className="row">
              <div className="d-flex py-1">
                <div className="w-100 pe-3">
                  <input type="email" id="email" placeholder="Email" className="form-control" />
                </div>
                <div className="flex-shrink-1">
                  <button type="submit" className="btn btn-warning">Subscribe</button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="d-flex py-1 pt-2">
                <input className="form-check-input" type="checkbox" value="1" id="flexCheckChecked" />
                <label className="form-check-label ps-2" htmlFor="flexCheckChecked">
                  By signing up, you agree to Horizontal Systems Privacy Policy
                </label>
              </div>
            </div>
            <div className="row">
              <div className="d-flex py-1">
                <span>
                  Subscribe to our newsletter to get new products, guides and cheat sheets when they are published.
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="divider by-3" />

        <div className="row">
          <div className="col-6">
            <HsLogo />
          </div>
          <div className="col-6 text-end text-light">
            @ 2019 HorizontalSystems
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
