import React from 'react'

function List({ children }) {
  return (
    <ul className="list-group list-group-flush bg-steel-10 rounded-3">
      {children}
    </ul>
  )
}

export default List