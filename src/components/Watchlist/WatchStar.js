import { createElement } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { watch } from '../../core/reducers/watchlist'
import { Star } from '../Icon'

function WatchStar({ className, size, coin, handleClick = true }) {
  const dispatch = useDispatch()
  const watching = useSelector(({ watchlist }) => watchlist.coinsMap[coin])

  const props = {
    className,
    width: size,
    height: size,
    role: 'button',
    fill: watching
      ? '#ffa800'
      : '#808085'
  }

  if (handleClick) {
    props.onClick = () => {
      if (coin) {
        dispatch(watch(coin))
      }
    }
  }

  return createElement(Star, props)
}

export default WatchStar
