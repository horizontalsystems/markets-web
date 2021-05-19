import ReactSelect, { components } from 'react-select'
import { ArrowDown } from '../Icon'
import React from 'react'

function Select({ className, placeholder, value, onChange, isSearchable, options }) {
  const styles = {
    control: styles => ({
      ...styles,
      backgroundColor: '#252933',
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
    menu: (styles) => ({
      ...styles,
      zIndex: 100,
      backgroundColor: '#252933',
      borderRadius: '8px'
    }),
    singleValue: (styles) => ({
      ...styles,
      color: '#F5F5F5',
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
          <ArrowDown />
        </components.DropdownIndicator>
      )
    )
  }

  return (
    <ReactSelect
      components={{ DropdownIndicator }}
      styles={styles}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      isSearchable={isSearchable}
      options={options}
    />
  )
}

export default Select
