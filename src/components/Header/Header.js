import React, { useState } from 'react'
import cn from 'classnames'

import Icon from '../Icon/Icon'
import './Header.scss'
import { Link } from 'react-router-dom'

function Header() {
  const [isDarkMode, setTheme] = useState(false);
  const toggleTheme = () => {
    setTheme(!isDarkMode)
    document.body.classList.toggle('dark')
  }

  return (
    <nav className={cn('navbar navbar-expand-md', isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light')}>
      <div className="container">
        <Link to="/" className="navbar-brand pe-lg-3">
          <Icon icon="logo" />
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
              <Link to="/" className="nav-link nav-link-header active">MARKET</Link>
            </li>
            <li className="nav-item pe-md-2 pe-lg-4">
              <Link to="/" className="nav-link nav-link-header">PORTFOLIO</Link>
            </li>
            <li className="nav-item pe-md-2 pe-lg-4">
              <a className="nav-link nav-link-header" href="/">BLOG</a>
            </li>
            <li className="nav-item pe-md-2 pe-lg-4">
              <a className="nav-link nav-link-header" href="/">ACADEMY</a>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item pe-md-3">
              <form className="input-group input-group-navbar">
                <input type="text" className="form-control rounded-start border-end-0" placeholder="Search" id="search" />
                <label htmlFor="search" className="input-group-text bg-white">
                  <Icon icon="search" />
                </label>
              </form>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link d-flex" href="/" id="dropdown-language" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <Icon icon="globe" />
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown-language">
                <li><a className="dropdown-item" href="/">English</a></li>
                <li><a className="dropdown-item" href="/">Russian</a></li>
                <li><a className="dropdown-item" href="/">French</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <span role="button" className="nav-link d-flex" onClick={() => toggleTheme()}>
                <Icon icon="daynight" />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
