import React from 'react'
import { currencyFullValue, percentageFormat } from '../../core/helpers'

import Card from '../Card/Card'
import List from '../List/List'
import events from '../../core/EventEmitter'
import ModalTvlChart from '../Modal/ModalTvlChart'
import { Candles } from '../Icon'
import ModalVolumeChart from '../Modal/ModalVolumeChart'

function CoinVolume({ volumes, coinId, launchDate }) {

  const mCapTvlRatio = (volumes.marketCap && volumes.tvl) ? volumes.marketCap / volumes.tvl : 0
  const onClickTvl = () => {
    if (volumes.tvl) {
      events.showModal(<ModalTvlChart coinId={coinId} />, "TVL Chart")
    }
  }

  const onClickVolume = () => {
    events.showModal(<ModalVolumeChart coinId={coinId} />, "Chart (24h)")
  }

  return (
    <div className="row g-3">
      <div className="col-lg-6">
        <Card className="h-100">
          <List>
            <li className="list-group-item bg-lawrence d-flex justify-content-between py-3">
              <div className="text-grey">Market Cap</div>
              <span className="text-oz">{currencyFullValue(volumes.marketCap)}</span>
            </li>
            <li className="list-group-item bg-lawrence d-flex justify-content-between py-3">
              <div className="text-grey">In Circulation</div>
              <div className="text-oz">
                {currencyFullValue(volumes.circulatingSupply, { thousandSeparated: true, mantissa: 0 })}
              </div>
            </li>
            <li className="list-group-item bg-lawrence d-flex justify-content-between py-3">
              <div className="text-grey">Total Supply</div>
              <div className="text-oz">{currencyFullValue(volumes.totalSupply)}</div>
            </li>
            <li className="list-group-item bg-lawrence d-flex justify-content-between py-3">
              <div className="text-grey">Diluted MCap</div>
              <div className="text-oz">{currencyFullValue(volumes.dilutedValuation)}</div>
            </li>
            <li className="list-group-item bg-lawrence d-flex justify-content-between py-3">
              <div className="text-grey">Launch Date</div>
              <div className="text-oz">{launchDate || <span className="text-grey-50">N/A</span> }</div>
            </li>
          </List>
        </Card>
      </div>

      <div className="col-lg-6">
        <Card className="h-100">
          <List>
            <li className="list-group-item bg-lawrence d-flex justify-content-between py-3" role="button" onClick={onClickVolume}>
              <div className="text-grey">Trading Volume</div>
              <div className="text-oz">
                {currencyFullValue(volumes.totalVolume)}
                {volumes.totalVolume && <Candles className="ms-1" />}
              </div>
            </li>
            <li className="list-group-item bg-lawrence d-flex justify-content-between py-3">
              <div className="text-grey">Volume Rank</div>
              <span className="text-grey-50">N/A</span>
            </li>
            <li className="list-group-item bg-lawrence d-flex justify-content-between py-3" role="button" onClick={onClickTvl}>
              <div className="text-grey">Total Value Locked</div>
              <div className="text-oz">
                {currencyFullValue(volumes.tvl)}
                {volumes.tvl && <Candles className="ms-1" />}
              </div>
            </li>
            <li className="list-group-item bg-lawrence d-flex justify-content-between py-3">
              <div className="text-grey">TVL Rank</div>
              <div className="text-grey-50">N/A</div>
            </li>
            <li className="list-group-item bg-lawrence d-flex justify-content-between py-3">
              <div className="text-grey">M.cap / TVL ratio</div>
              <div className="text-oz">
                {percentageFormat(mCapTvlRatio, { forceSign: false }, <span className="text-grey-50">N/A</span>)}
              </div>
            </li>
          </List>
        </Card>
      </div>
    </div>
  )
}

export default CoinVolume
