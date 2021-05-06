import cn from 'classnames'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCoinInfo, selectCoin } from '../../core/reducers/coinInfo'
import { currencyFullValue, percentageFormat, priceColor } from '../../core/helpers'

import Chart from '../Chart/Chart'
import CoinMarkets from './CoinMarkets'
import CoinPerformance from './CoinPerformance'
import CoinStats from './CoinStats'
import CoinInfo from './CoinInfo'
import CoinVolume from './CoinVolume'
import CoinSidebar from './CoinSidebar'
import CoinCategories from './CoinCategories'
import CoinSecurity from './CoinSecurity'
import LoaderCoinPrice from '../Loader/LoaderCoinPrice'
import LoaderCoinHeader from '../Loader/LoaderCoinHeader'

function Coin({ match }) {
  const coinId = match.params.id
  const coin = useSelector(state => selectCoin(state, coinId))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCoinInfo(coinId))
  }, [dispatch, coinId])

  return (
    <div className="Coin">
      <div className="container-sm pb-5">
        <div className="row row-cols-2 g-3">
          <div className="col-12 col-lg-9">
            <div className="p-3 p-md-5 bg-steel-10 rounded-3">
              <div className="d-flex flex-column flex-md-row">
                {coin.fetching ? <LoaderCoinHeader /> :
                  <>
                    <img
                      className="object-contain rounded-circle d-none d-md-block"
                      src={coin.image}
                      height="86"
                      alt=""
                    />

                    <div className="ps-md-3 mt-3 mt-md-0">
                      <div className="fs-4 text-grey-light">{coin.name}</div>
                      <div className="d-flex align-items-center">
                        <span className="fs-2 text-grey fw-bold text-uppercase">{coin.symbol}</span>
                        <span className="ms-3 text-bran bg-lawrence rounded-2 px-3 py-1">Rank: {coin.rank}</span>
                      </div>
                    </div>
                  </>}
              </div>

              <CoinCategories categories={coin.categories} />

              <div className="divider my-3" />
              <div className="d-flex align-items-center">
                {coin.fetching ? <LoaderCoinPrice /> :
                  <>
                    <span className="fs-1 text-oz fw-bold">
                      {currencyFullValue(coin.price)}
                    </span>
                    <span className={cn('fs-3 ms-2', priceColor(coin.priceChange24))}>
                      {percentageFormat(coin.priceChange24)}
                    </span>
                  </>}
              </div>

              <div className="my-3">
                <Chart coin={coin.symbol} coinId={coinId} />
              </div>

              <div className="mb-3">
                <CoinPerformance performance={coin.performance} priceRanges={coin.priceRanges} isFetching={coin.fetching} />
              </div>

              <div className="mb-3">
                <CoinVolume
                  volumes={coin.volumes}
                  symbol={coin.symbol}
                  coinId={coinId}
                  launchDate={coin.launchDate}
                />
              </div>

              <CoinMarkets className="my-3" markets={coin.markets} />
              <CoinSecurity />

              <CoinStats funds={coin.funds} holders={[]} />
              <CoinInfo description={coin.description} guide={coin.guide} whitepaper={coin.whitepaper} />
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
