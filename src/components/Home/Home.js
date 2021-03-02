import React from 'react'
import Header from '../Header/Header'
import HeaderTabs from '../Header/HeaderTab'
import Overview from '../Overview/Overview'

import './Home.scss'

function Home() {
  return (
    <div className="Home">
      <Header />
      <HeaderTabs />
      <Overview />
    </div>
  )
}

export default Home
