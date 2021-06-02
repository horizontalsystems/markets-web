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
    fetchCoins().then(r => {
      const map = r.data.map(item =>
        ({
          id: item.id,
          name: item.name.toLowerCase(),
          label: `${item.name}(${item.symbol})`,
          symbol: item.symbol
        })
      ).filter(({ id }) =>
        !id.includes('long') &&
        !id.includes('short')
      ).sort((a, b) =>
        a.id.localeCompare(b)
      )

      return setCoins(map)
    })
  }, [])

  const filterColors = (value) => {
    const res = []
    const searchString = value.toLowerCase()

    for (let i = 0; i < coins.length; i++) {
      if (res.length >= 10) {
        break
      }

      const coin = coins[i];
      if (coin.name === searchString || coin.symbol === searchString) {
        res.push(coin)
      }
    }

    for (let i = 0; i < coins.length; i++) {
      if (res.length >= 10) {
        break
      }

      const coin = coins[i];
      if (res.indexOf(coin) < 0) {
        if (coin.name.includes(searchString) || coin.symbol.includes(searchString)) {
          res.push(coin)
        }
      }
    }

    return res
  }

  const loadOptions = (inputValue, callback) => {
    callback(filterColors(inputValue))
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

export default HeaderSearch
