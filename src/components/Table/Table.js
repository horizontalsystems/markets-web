import React from 'react'

function Table({ children }) {
  return (
    <div className="table-responsive">
      <table className="table table-borderless mb-0 table-zebra text-bran">
        {children}
      </table>
    </div>
  )
}

export default Table
