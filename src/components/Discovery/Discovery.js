import React from 'react'
import { connect } from 'react-redux'

import { fetchMarkets } from '../../core/reducers/markets'
import { fetchMarketsGlobal } from '../../core/reducers/marketsGlobal'

import HeaderTabs from '../Header/HeaderTab'
import CategoryFilter from './CategoryFilter'
import CoinList from './CoinList'

function Discovery({ coins, category }) {
  return (
    <div className="Discovery">
      <HeaderTabs active="/discovery" />

      <div className="py-5">
        <CategoryFilter category={category} />
        <CoinList coins={coins} />
      </div>
    </div>
  )
}

class DiscoveryContainer extends React.Component {
  componentDidMount() {
    this.props.fetchMarkets()
  }

  render() {
    return <Discovery coins={this.props.coins} category={this.props.category} />
  }
}

const mapStateToProps = ({ markets }, { match }) => ({
  coins: markets.coins,
  category: match.params.category
})

export default connect(mapStateToProps, { fetchMarkets, fetchMarketsGlobal })(DiscoveryContainer)
