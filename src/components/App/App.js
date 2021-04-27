import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Overview from '../Overview/Overview'
import TopGainers from '../Page/TopGainers'
import TopLosers from '../Page/TopLosers'
import Discovery from '../Discovery/Discovery'
import DiscoveryFilter from '../Discovery/DiscoveryFilter'
import Watchlist from '../Watchlist/Watchlist'
import DefiTvl from '../Page/DefiTvl'
import Dominance from '../Page/Dominance'
import DefiMarketCap from '../Page/DefiMarketCap'
import Volume from '../Page/Volume'
import Coin from '../Coin/Coin'

import './App.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/coins/:id" component={Coin} />
        <Route path="/discovery/filter" component={DiscoveryFilter} />
        <Route path="/discovery/:category?" component={Discovery} />
        <Route path="/watchlist" component={Watchlist} />
        <Route path="/top-gainers" component={TopGainers} />
        <Route path="/top-losers" component={TopLosers} />
        <Route path="/defi-tvl" component={DefiTvl} />
        <Route path="/defi-market-cap" component={DefiMarketCap} />
        <Route path="/btc-dominance" component={Dominance} />
        <Route path="/volume" component={Volume} />
        <Route path="/" component={Overview} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
