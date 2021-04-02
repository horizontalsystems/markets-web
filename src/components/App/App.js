import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Overview from '../Overview/Overview'
import Watchlist from '../Watchlist/Watchlist'
import Discovery from '../Discovery/Discovery'
import Coin from '../Coin/Coin'

import './App.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/coins/:id" component={Coin} />
        <Route path="/discovery" component={Discovery} />
        <Route path="/watchlist" component={Watchlist} />
        <Route path="/" component={Overview} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App
