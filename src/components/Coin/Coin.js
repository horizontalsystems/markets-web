import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCoinInfo, selectCoin } from '../../core/reducers/coinInfo'
import { currencyFullValue, percentageFormat } from '../../core/helpers'
import { Info } from '../Icon'

import Chart from '../Chart/Chart'
import CoinMarkets from './CoinMarkets'
import CoinPerformance from './CoinPerformance'
import CoinStats from './CoinStats'
import CoinInfo from './CoinInfo'
import CoinVolume from './CoinVolume'
import CoinSidebar from './CoinSidebar'
import CoinCategories from './CoinCategories'
import List from '../List/List'
import ListItem from '../List/ListItem'

function Coin({ match }) {
  const coinId = match.params.id
  const coin = useSelector(state => selectCoin(state, coinId))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCoinInfo(coinId))
  }, [dispatch, coinId])

  return (
    <div className="Coin">
      <div className="container pb-5">
        <div className="row row-cols-2 g-3">
          <div className="col-12 col-lg-9">
            <div className="p-5 bg-steel-10 rounded-3">
              <div className="d-flex">
                <img
                  className="object-contain rounded-circle"
                  src={coin.image}
                  width="96"
                  alt=""
                />

                <div className="ps-3">
                  <div className="fs-3 text-grey-light">{coin.name}</div>
                  <div className="d-flex align-items-center">
                    <span className="fs-1 text-grey fw-bold text-uppercase">{coin.symbol}</span>
                    <span className="ms-3 text-bran bg-lawrence rounded-2 px-3 py-1">Rank: {coin.rank}</span>
                  </div>
                </div>
              </div>

              <CoinCategories categories={coin.categories} />

              <div className="divider my-3" />
              <div className="d-flex align-items-center">
                <span className="fs-1 text-oz fw-bold">
                  {currencyFullValue(coin.price)}
                </span>
                <span className="fs-3 text-success ms-2">
                  {percentageFormat(coin.priceChange24)}
                </span>
              </div>

              <div className="my-3">
                <Chart coin={coin.symbol} coinId={coinId} />
              </div>

              <div className="mb-3">
                <CoinPerformance performance={coin.performance} priceRanges={coin.priceRanges} />
              </div>

              <div className="row g-3">
                <div className="col-lg-6">
                  <CoinVolume
                    totalVolume={coin.volumes.totalVolume}
                    totalSupply={coin.volumes.totalSupply}
                    circulatingSupply={coin.volumes.circulatingSupply}
                    marketCap={coin.volumes.marketCap}
                    dilutedValuation={coin.volumes.dilutedValuation}
                  />
                </div>

                <div className="col-lg-6">
                  <List>
                    <ListItem className="py-3">
                      <div className="text-grey">Privacy</div>
                      <div className="text-oz">
                        <span className="badge bg-remus text-oz">High</span>
                        <Info className="ms-2" role="bottom" />
                      </div>
                    </ListItem>
                    <ListItem className="py-3">
                      <div className="text-grey">Issuance</div>
                      <small className="text-oz">N/A</small>
                    </ListItem>
                    <ListItem className="py-3">
                      <div className="text-grey">Confiscation-resistance</div>
                      <small className="text-oz">N/A</small>
                    </ListItem>
                    <ListItem className="py-3">
                      <div className="text-grey">Censorship-resistance</div>
                      <small className="text-oz">N/A</small>
                    </ListItem>
                    <ListItem className="py-3">
                      <div className="text-grey">Audited</div>
                      <small className="text-oz">N/A</small>
                    </ListItem>
                  </List>
                </div>
              </div>

              <CoinMarkets className="my-3" markets={coin.markets} />

              <div className="divider mt-5" />
              <CoinInfo description={coin.description} guide={coin.guide} whitepaper={coin.whitepaper} />
              <CoinStats funds={coin.funds} holders={[]} />
            </div>
          </div>

          <div className="col-12 col-lg-3">
            <CoinSidebar coin={coin.id} links={coin.links} platforms={coin.platforms} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coin
