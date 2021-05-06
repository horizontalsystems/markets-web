import React, { Suspense, useState } from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import { Logo } from '../Icon'
import './Header.scss'

const HeaderSearch = React.lazy(() => import('./HeaderSearch'))

function Header({ activeTab }) {
  const [isDarkMode] = useState(true);
  // const toggleTheme = () => {
  //   setTheme(!isDarkMode)
  //   document.body.classList.toggle('dark')
  // }

  return (
    <nav className={cn('navbar navbar-expand-md', isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light')}>
      <div className="container">
        <Link to="/" className="navbar-brand pe-lg-3">
          <Logo />
        </Link>

        <button className="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item pe-md-2 pe-lg-4">
              <Link to="/" className={cn('nav-link nav-link-header', { active: activeTab === '/' })}>
                MARKET
              </Link>
            </li>
            <li className="nav-item pe-md-2 pe-lg-4">
              <Link to="/portfolio" className={cn('nav-link nav-link-header', { active: activeTab === '/portfolio' })}>
                PORTFOLIO
              </Link>
            </li>
            <li className="nav-item pe-md-2 pe-lg-4">
              <a className="nav-link nav-link-header" href="https://blocksdecoded.com/" target="_blank" rel="noreferrer">
                BLOG
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item pe-md-3">
              <Suspense fallback={null}>
                <HeaderSearch />
              </Suspense>
            </li>
            {/*<li className="nav-item dropdown">*/}
            {/*  <a className="nav-link d-flex" href="/" id="dropdown-language" role="button" data-bs-toggle="dropdown" aria-expanded="false">*/}
            {/*    <Globe />*/}
            {/*  </a>*/}
            {/*  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown-language">*/}
            {/*    <li><a className="dropdown-item" href="/">English</a></li>*/}
            {/*    <li><a className="dropdown-item" href="/">Russian</a></li>*/}
            {/*    <li><a className="dropdown-item" href="/">French</a></li>*/}
            {/*  </ul>*/}
            {/*</li>*/}
            {/*<li className="nav-item">*/}
            {/*  <span role="button" className="nav-link d-flex" onClick={toggleTheme}>*/}
            {/*    <Daynight />*/}
            {/*  </span>*/}
            {/*</li>*/}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
