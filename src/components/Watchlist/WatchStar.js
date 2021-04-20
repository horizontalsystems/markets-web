import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { watch } from '../../core/reducers/watchlist'
import { Star } from '../Icon'

function WatchStar({ className, size, coin }) {
  const dispatch = useDispatch()
  const watching = useSelector(({ watchlist }) => watchlist.coinsMap[coin])

  const onClick = () => {
    if (coin) {
      dispatch(watch(coin))
    }
  }

  return watching ?
    <Star fill="#ffa800" className={className} height={size} width={size} role="button" onClick={onClick} /> :
    <Star fill="#808085" className={className} height={size} width={size} role="button" onClick={onClick} />
}

export default WatchStar
