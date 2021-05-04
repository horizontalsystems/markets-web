import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './App/App'
import Modal from './Modal/Modal'

function Routes() {
  return (
    <BrowserRouter>
      <Modal />

      <Switch>
        <Route path="/" render={App} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
