import React from 'react'
import LoaderListItem from './LoaderListItem'

function LoaderTable({ rows, cols }) {
  return (
    Array(rows)
      .fill('')
      .map((e, i) => (
        <tr key={i}>
          <td colSpan={cols}>
            <LoaderListItem size={cols} />
          </td>
        </tr>
      ))
  )
}

export default LoaderTable
