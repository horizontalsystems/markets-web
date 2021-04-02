import React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchMarkets } from '../../core/reducers/markets'
import { fetchMarketsGlobal } from '../../core/reducers/marketsGlobal'
import { currency, percentage, priceColor, volume } from '../../core/helpers'
import HeaderTabs from '../Header/HeaderTab'
import CategoryFilter from './CategoryFilter'

function Discovery({ coins }) {
  return (
    <div className="Discovery">
      <HeaderTabs active="/discovery" />

      <div className="py-5">
        <CategoryFilter />

        <div className="container">
          <div className="card border-0 shadow-sm bg-lawrence p-3 h-100 w-100 mt-4">
            <div className="pb-3 border-bottom fw-500">
              <div className="dropdown">
                <button className="btn dropdown-toggle text-oz" type="button" id="filter" data-bs-toggle="dropdown" aria-expanded="false">
                  Highest Cap
                </button>
                <ul className="dropdown-menu" aria-labelledby="filter">
                  <li><span className="dropdown-item">Price</span></li>
                  <li><span className="dropdown-item">Volume</span></li>
                  <li><span className="dropdown-item">Change</span></li>
                </ul>
              </div>
            </div>

            <div className="table-responsive">
              <table className="table table-borderless mb-0 table-zebra text-bran">
                <thead>
                <tr className="small text-grey">
                  <td className="pb-2 pt-2 pe-0">#</td>
                  <td className="pb-2 pt-2">Name</td>
                  <td className="text-end pb-2 pt-2">Price</td>
                  <td className="text-end pb-2 pt-2">24H</td>
                  <td className="text-end pb-2 pt-2">7D</td>
                  <td className="text-end pb-2 pt-2">Market Cap</td>
                  <td className="text-end pb-2 pt-2">Volume</td>
                </tr>
                </thead>
                <tbody>
                {coins.map(({ id, name, market_cap_rank, image, current_price, market_cap, total_volume, price_change_percentage_24h, price_change_percentage_7d_in_currency }) => (
                  <tr key={id}>
                    <td className="small pe-0">{market_cap_rank}</td>
                    <td>
                      <div className="d-flex">
                        <img src={image} alt={name} className="me-3" width="24" height="24" />
                        <Link to={`/coins/${id}`} className="text-bran text-decoration-none">
                          {name}
                        </Link>
                      </div>
                    </td>
                    <td className="text-end">{currency(current_price, { thousandSeparated: true })}</td>
                    <td className={cn('text-end', priceColor(price_change_percentage_24h))}>{percentage(price_change_percentage_24h)}</td>
                    <td className={cn('text-end', priceColor(price_change_percentage_7d_in_currency))}>{percentage(price_change_percentage_7d_in_currency)}</td>
                    <td className="text-end">${volume(market_cap)}</td>
                    <td className="text-end">${volume(total_volume)}</td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

class DiscoveryContainer extends React.Component {
  componentDidMount() {
    this.props.fetchMarkets()
  }

  render() {
    return <Discovery coins={this.props.coins} />
  }
}

const mapStateToProps = ({ markets }) => ({
  coins: markets.coins
})

export default connect(mapStateToProps, { fetchMarkets, fetchMarketsGlobal })(DiscoveryContainer)
