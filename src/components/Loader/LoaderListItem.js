import React from 'react'
import ContentLoader from 'react-content-loader'

function LoaderListItem() {
  return (
    <ContentLoader
      height="25"
      speed={2}
      width="100%"
      backgroundColor={'#333333'}
      foregroundColor={'#bdbdbd'}
    >
      <rect x="3%" y="6" rx="6" ry="6" width="25%" height="10" />
      <rect x="36%" y="6" rx="6" ry="6" width="25%" height="10" />
      <rect x="70%" y="6" rx="6" ry="6" width="25%" height="10" />
    </ContentLoader>
  )
}

export default LoaderListItem
