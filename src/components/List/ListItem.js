import React from 'react'
import cn from 'classnames'

function ListItem({ className, children }) {
  return (
    <li className={cn('list-group-item bg-lawrence d-flex justify-content-between', className)}>
      {children}
    </li>
  )
}

export default ListItem
