import React from 'react'
import cn from 'classnames'

function ListItem({ className, children, value }) {
  return (
    <li className={cn('list-group-item bg-lawrence d-flex justify-content-between', className)}>
      {children}
      {value && (
        <div className="text-truncate">
          <small className="font-monospace">{value}</small>
        </div>
      )}
    </li>
  )
}

export default ListItem
