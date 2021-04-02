import React from 'react'
import { connect } from 'react-redux'
import { fetchMarkets } from '../../core/reducers/markets'
import { fetchMarketsGlobal } from '../../core/reducers/marketsGlobal'

import HeaderTabs from '../Header/HeaderTab'
import News from '../News/News'
import OverviewSpotlight from './OverviewSpotlight'
import OverviewGlobalMarkets from './OverviewGlobalMarkets'

function Overview() {
  return (
    <div className="Overview">
      <HeaderTabs active="/" />

      <div className="py-5">
        <div className="container">
          <OverviewGlobalMarkets />

          <h3 className="text-oz pb-3 pt-4">
            Spotlight
          </h3>

          <OverviewSpotlight />

          <h3 className="text-oz pb-3 pt-4">
            News
          </h3>

          <div className="row g-3">
            <div className="col-lg-4">
              <News title="Unfolded" />
            </div>
            <div className="col-lg-4">
              <News title="Decrypt" />
            </div>
            <div className="col-lg-4">
              <News title="Coindesk" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

class OverviewContainer extends React.Component {
  componentDidMount() {
    this.props.fetchMarketsGlobal()
    this.props.fetchMarkets()
  }

  render() {
    return <Overview />
  }
}

export default connect(null, { fetchMarkets, fetchMarketsGlobal })(OverviewContainer)
