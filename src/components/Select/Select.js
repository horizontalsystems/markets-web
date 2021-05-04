import ReactSelect from 'react-select'

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

  return (
    <ReactSelect
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
