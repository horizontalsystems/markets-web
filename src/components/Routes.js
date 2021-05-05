import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Modal from './Modal/Modal'
import Portfolio from './Portfolio/Portfolio'
import App from './App/App'

function Routes() {
  return (
    <BrowserRouter>
      <Modal />

      <Switch>
        <Route path="/portfolio" render={Portfolio} />
        <Route path="/" render={App} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
