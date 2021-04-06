import React from 'react'
import { Copy, Github, Globe, Star, Reddit, Telegram, Twitter } from '../Icon'
import List from '../List/List'
import ListItem from '../List/ListItem'

function CoinSidebar({ links = {}, platform = {} }) {
  return (
    <>
      <div className="card py-2 px-3 mb-3 bg-lawrence rounded-3 border-0">
        <div className="fw-500 d-flex justify-content-between align-items-center">
          <div className="d-flex text-oz" role="button">
            <Star className="me-2" /> Add to Watchlist
          </div>
        </div>
      </div>

      <List>
        {links.website && <ListItem>
          <a className="text-oz text-decoration-none" href={links.website} target="_blank" rel="noreferrer">
            <Globe className="me-2" /> Website
          </a>
        </ListItem>}

        {links.twitter && <ListItem>
          <a className="text-oz text-decoration-none" href={links.twitter} target="_blank" rel="noreferrer">
            <Twitter className="me-2" /> Twitter
          </a>
        </ListItem>}

        {links.telegram && <ListItem>
          <a className="text-oz text-decoration-none" href={links.telegram} target="_blank" rel="noreferrer">
            <Telegram className="me-2" /> Telegram
          </a>
        </ListItem>}

        {links.reddit && <ListItem>
          <a className="text-oz text-decoration-none" href={links.reddit} target="_blank" rel="noreferrer">
            <Reddit className="me-2" /> Reddit
          </a>
        </ListItem>}

        {links.github && <ListItem>
          <a className="text-oz text-decoration-none" href={links.github} target="_blank" rel="noreferrer">
            <Github className="me-2" /> Github
          </a>
        </ListItem>}
      </List>

      {platform.address && <div className="card bg-lawrence rounded-3 border-0 mt-3">
        <ul className="list-group list-group-flush rounded-3">
          <li className="list-group-item bg-lawrence text-oz d-flex justify-content-between">
            <div className="text-nowrap me-2">
              <Copy className="me-2" role="button" />
              {platform.name}
            </div>
            <div className="text-truncate">
              <small className="font-monospace">{platform.address}</small>
            </div>
          </li>
        </ul>
      </div>}
    </>
  )
}

export default CoinSidebar
