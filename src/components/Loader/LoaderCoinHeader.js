import ContentLoader from 'react-content-loader'
import React from 'react'

function LoaderCoinHeader() {
  return (
    <ContentLoader
      width="200"
      height="86"
      backgroundColor="#6E789933"
      foregroundColor="#BDBDBD80"
    >
      <circle cx="40" cy="40" r="40" />
      <rect x="100" y="8" rx="3" ry="3" width="100" height="20" />
      <rect x="100" y="45" rx="3" ry="3" width="60" height="30" />
    </ContentLoader>
  )
}

export default LoaderCoinHeader
