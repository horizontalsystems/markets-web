import React from 'react'

function Icon({ icon, className }) {
  return (
    <img
      className={className}
      src={require(`./${icon}.svg`).default}
      alt={icon}
    />
  )
}

export default Icon
