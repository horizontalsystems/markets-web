import React from 'react'
import cn from 'classnames'

function List({ children, className }) {
  return (
    <ul className={cn('list-group list-group-flush bg-steel-10 rounded', className)}>
      {children}
    </ul>
  )
}

export default List
