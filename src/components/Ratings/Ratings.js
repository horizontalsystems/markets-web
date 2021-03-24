import React from 'react'
import { ReactComponent as Star } from './star.svg'

function Ratings({ rate = 2 }) {
  const rateMax = 5
  const rateCurr = Math.min(rate, rateMax)
  const stars = []

  for (let i = 1; i <= rateMax; i++) {
    const fill = (rateMax - rateCurr) < i ? '#FFA800' : 'none'
    const stroke = (rateMax - rateCurr) < i ? '#FFA800' : '#808085'

    stars.push(
      <Star
        key={i}
        className="ms-1"
        fill={fill}
        stroke={stroke}
      />)
  }

  return (
    <div className="Rating" aria-label="Rating of this item is 3 out of 5">
      {stars}
    </div>
  )
}

export default Ratings
