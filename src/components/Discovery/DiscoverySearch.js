import React from 'react'
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { clearFilters, filtersOptions, selectFilteredCoins, setFilters } from '../../core/reducers/discovery'
import Select from '../Select/Select'

function DiscoverySearch() {
  const { filters, loading } = useSelector(({ discovery }) => ({
    filters: discovery.filters,
    loading: discovery.filtersCoinFetching
  }))

  const filteredCoins = useSelector(state => selectFilteredCoins(state))
  const dispatch = useDispatch()

  return (
    <div className="bg-steel-10 rounded-3 mt-3 p-4">
      <div className="row g-3">
        <div className="col-lg-3 col-sm-12 col-md-6">
          <Select
            value={filters.top}
            options={filtersOptions.top}
            onChange={value => dispatch(setFilters({ top: value }))}
            isSearchable={false}
            isDisabled={loading}
          />

          <Select
            className="mt-3"
            value={filters.marketCap}
            options={filtersOptions.marketCap}
            onChange={value => dispatch(setFilters({ marketCap: value }))}
            isSearchable={false}
            isDisabled={loading}
          />
        </div>
        <div className="col-lg-3 col-sm-12 col-md-6">
          <Select
            placeholder="Volume"
            value={filters.volumes}
            options={filtersOptions.volumes}
            onChange={value => dispatch(setFilters({ volumes: value }))}
            isSearchable={false}
            isDisabled={loading}
          />

          <Select
            className="mt-3"
            placeholder="Liquidity"
            isSearchable={false}
            isDisabled={loading}
          />
        </div>
        <div className="col-lg-3 col-sm-12 col-md-6">
          <Select
            placeholder="Period"
            value={filters.pricePeriod}
            options={filtersOptions.pricePeriod}
            onChange={value => dispatch(setFilters({ pricePeriod: value }))}
            isSearchable={false}
            isDisabled={loading}
          />

          <Select
            className="mt-3"
            placeholder="Price Change"
            value={filters.priceChange}
            options={filtersOptions.priceChange}
            onChange={value => dispatch(setFilters({ priceChange: value }))}
            isSearchable={false}
            isDisabled={loading}
          />
        </div>
        <div className="col-lg-3 col-sm-12 col-md-6 d-flex align-items-end justify-content-end">
          <button className="btn bg-lawrence text-jacob rounded-3" disabled>
            <span className="pe-2">Results:</span>
            <span className={cn('spinner-grow spinner-grow-sm', { 'd-none': !loading })} role="status" />
            <span className={cn('text-grey', { 'd-none': loading })}>{filteredCoins.length}</span>
          </button>
          <button
            type="button"
            className="btn bg-lawrence text-jacob rounded-3 ms-3"
            onClick={() => dispatch(clearFilters())}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  )
}

export default DiscoverySearch
