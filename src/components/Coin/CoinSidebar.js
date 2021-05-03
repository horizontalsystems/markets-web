import React from 'react'
import copy from 'copy-text-to-clipboard'
import { useDispatch } from 'react-redux'
import { watch } from '../../core/reducers/watchlist'
import { Copy, Github, Globe, Reddit, Telegram, Twitter } from '../Icon'
import List from '../List/List'
import ListItem from '../List/ListItem'
import WatchStar from '../Watchlist/WatchStar'

function CoinSidebar({ coin, links = {}, platforms }) {
  const onClickCopy = (text) => {
    copy(text)
  }

  const dispatch = useDispatch()
  const onClickWatch = () => {
    if (coin) {
      dispatch(watch(coin))
    }
  }

  return (
    <>
      <div className="card py-2 px-3 mb-3 bg-lawrence rounded-3 border-0">
        <div className="fw-500">
          <div className="d-flex text-oz" role="button" onClick={onClickWatch}>
            <WatchStar size="20" className="me-2" coin={coin} handleClick={false} /> Add to Watchlist
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

      {platforms && <div className="card bg-lawrence rounded-3 border-0 mt-3">
        <ul className="list-group list-group-flush rounded-3">
          {platforms.ethereum && <ListItem className="text-oz" value={platforms.ethereum}>
            <div className="text-nowrap me-2">
              <Copy className="me-2" role="button" onClick={() => onClickCopy(platforms.ethereum)} /> Ethereum
            </div>
          </ListItem>}
          {platforms['binance-smart-chain'] && <ListItem className="text-oz" value={platforms['binance-smart-chain']}>
            <div className="text-nowrap me-2">
              <Copy className="me-2" role="button" onClick={() => onClickCopy(platforms['binance-smart-chain'])} /> Binance Smart Chain
            </div>
          </ListItem>}
          {platforms.solana && <ListItem className="text-oz" value={platforms.solana}>
            <div className="text-nowrap me-2">
              <Copy className="me-2" role="button" onClick={() => onClickCopy(platforms.solana)} /> Solana
            </div>
          </ListItem>}
          {platforms.Avalanche && <ListItem className="text-oz" value={platforms.Avalanche}>
            <div className="text-nowrap me-2">
              <Copy className="me-2" role="button" onClick={() => onClickCopy(platforms.Avalanche)} /> Avalanche
            </div>
          </ListItem>}
        </ul>
      </div>}
    </>
  )
}

export default CoinSidebar
