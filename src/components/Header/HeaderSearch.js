import React, { useEffect, useState } from 'react'
import Select from 'react-select/async'
import debounce from 'lodash/debounce'
import axios from 'axios'
import { components } from 'react-select'
import { useHistory } from 'react-router-dom'
import { Search } from '../Icon'

function HeaderSearch() {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    fetchCoins().then(({ data }) => {
      const map = data.map(item =>
        ({
          id: item.id,
          name: item.name.toLowerCase(),
          label: `${item.name} (${item.symbol})`,
          symbol: item.symbol,
          priority: platformPriority(item)
        })
      ).filter(({ id }) =>
        !id.includes('long') &&
        !id.includes('short')
      ).sort((a, b) =>
        a.priority - b.priority
      )

      return setCoins(map)
    })
  }, [])

  const filterCoins = value => {
    const searchStr = value.toLowerCase()

    const equalCodes = []
    const equalNames = []
    const matchCodes = []
    const matchNames = []

    let equalRes = []
    let matchRes = []

    for (let i = 0; i < coins.length; i++) {
      equalRes = [...equalCodes, ...equalNames]
      matchRes = [...matchCodes, ...matchNames]

      if (equalRes.length >= 10) {
        break
      }
      if (matchRes.length >= 10) {
        break
      }

      const coin = coins[i]

      if (coin.symbol === searchStr) {
        equalCodes.push(coin)
      } else if (coin.name === searchStr) {
        equalNames.push(coin)
      } else if (coin.symbol.match(searchStr)) {
        matchCodes.push(coin)
      } else if (coin.name.match(searchStr)) {
        matchNames.push(coin)
      }
    }

    return [...equalRes, ...matchRes]
  }

  const loadOptions = (inputValue, callback) => {
    callback(filterCoins(inputValue))
  }

  const history = useHistory()
  const styles = {
    control: styles => ({
      ...styles,
      backgroundColor: '#13151a',
      borderColor: '#6E789933',
      borderRadius: '8px'
    }),
    input: () => ({
      width: 220,
      maxWidth: 220,
      color: '#F5F5F5'
    }),
    indicatorSeparator: () => ({
      display: 'none'
    }),
    loadingIndicator: () => ({
      display: 'none'
    }),
    menu: (styles) => ({
      ...styles,
      zIndex: 100,
      backgroundColor: '#252933',
      borderRadius: '8px'
    }),
    option: (styles) => ({
      ...styles,
      borderBottom: '1px dotted #6E78991a',
      color: '#c8c7cc',
      cursor: 'pointer',
      padding: '13px',
      backgroundColor: '#252933',
      '&:active': {
        backgroundColor: 'transparent',
      }
    })
  }

  const DropdownIndicator = props => {
    return (
      components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
          <Search />
        </components.DropdownIndicator>
      )
    )
  }

  const NoOptionsMessage = props => {
    return (
      <components.NoOptionsMessage {...props}>
        No results
      </components.NoOptionsMessage>
    );
  }

  return (
    <Select
      value={null}
      components={{ DropdownIndicator, NoOptionsMessage }}
      placeholder="Search"
      defaultOptions
      styles={styles}
      onChange={coin => history.push(`/coins/${coin.id}`)}
      loadOptions={debounce(loadOptions, 100)}
    />
  )
}

function fetchCoins() {
  return axios.get('https://api.coingecko.com/api/v3/coins/list?include_platform=true')
}

function platformPriority({ platforms = {} }) {
  const { ethereum, 'binance-smart-chain': binance } = platforms

  if (ethereum && ethereum.length) {
    return 1
  }

  if (binance && binance.length) {
    return 2
  }

  return 0
}

export default HeaderSearch
