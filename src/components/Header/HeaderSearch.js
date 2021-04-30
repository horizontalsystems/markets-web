import React, { useEffect, useState } from 'react'
import Select from 'react-select/async'
import debounce from 'lodash/debounce'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

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
    input: () => ({
      width: 220,
      maxWidth: 220.
    }),
    loadingIndicator: () => ({
      display: 'none'
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 100
    })
  }

  return (
    <Select
      value={null}
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
