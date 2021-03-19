import React from 'react'

function CategorySearch() {
  return (
    <div className="bg-steel-10 rounded-3 mt-3 p-4">
      <div className="row g-3">
        <div className="col-lg-3 col-sm-12 col-md-6">
          <select className="form-select bg-lawrence text-grey border">
            <option value="1">Top 100</option>
            <option value="2">Top 500</option>
            <option value="3">Top 1000</option>
          </select>

          <select className="form-select bg-lawrence text-grey border mt-3">
            <option defaultValue>Market Cap</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="col-lg-3 col-sm-12 col-md-6">
          <select className="form-select bg-lawrence text-grey border">
            <option defaultValue>Volume</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <select className="form-select bg-lawrence text-grey border mt-3">
            <option defaultValue>Liquidity</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="col-lg-3 col-sm-12 col-md-6">
          <select className="form-select bg-lawrence text-grey border">
            <option defaultValue>Period</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <select className="form-select bg-lawrence text-grey border mt-3">
            <option defaultValue>Price Change</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="col-lg-3 col-sm-12 col-md-6 d-flex align-items-end justify-content-end">
          <button type="button" className="btn bg-lawrence text-jacob rounded-3">Show Results</button>
          <button type="button" className="btn bg-lawrence text-jacob rounded-3 ms-3">Clear</button>
        </div>
      </div>
    </div>
  )
}

export default CategorySearch
