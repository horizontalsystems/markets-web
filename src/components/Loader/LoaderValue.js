import ContentLoader from 'react-content-loader'
import React from 'react'

function LoaderValue({ width, height }) {
  return (
    <ContentLoader
      speed={1}
      width={width}
      height={height}
      backgroundColor={'#333333'}
      foregroundColor={'#bdbdbd'}
    >
      <rect x="0" y="0" rx="3" ry="3" width={width} height={height} />
    </ContentLoader>
  )
}

export default LoaderValue
