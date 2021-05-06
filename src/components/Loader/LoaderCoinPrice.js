import ContentLoader from 'react-content-loader'
import React from 'react'

function LoaderCoinPrice() {
  return (
    <ContentLoader
      width="200"
      height="60"
      backgroundColor={'#333333'}
      foregroundColor={'#bdbdbd'}
    >
      <rect x="0" y="8" rx="3" ry="3" width="70" height="40" />
      <rect x="80" y="8" rx="3" ry="3" width="40" height="40" />
    </ContentLoader>
  )
}

export default LoaderCoinPrice
