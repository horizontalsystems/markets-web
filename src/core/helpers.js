import numbro from 'numbro'

export function formatNumber(value, options = { thousandSeparated: true, mantissa: 2 }) {
  if (!value) {
    return null
  }

  return numbro(value).format(options)
}

export function percentageFormat(value, options, na = '') {
  if (!value) {
    return na
  }

  const number = numbro(value).format({
    trimMantissa: true,
    mantissa: 2,
    forceSign: true,
    ...options
  })

  return `${number}%`
}

export function currencyFormat(value, options) {
  if (!value) {
    return 'N/A'
  }

  return numbro(value).formatCurrency(options)
}

export function currencyFullValue(value, options = { thousandSeparated: true }) {
  return currencyFormat(value, options)
}

export function volume(value) {
  return numbro(value).format({
    thousandSeparated: true
  })
}

export function priceColor(value) {
  if (!value) {
    return null
  }

  const isPositive = value >= 0
  return {
    'text-success': isPositive,
    'text-danger': !isPositive
  }
}

export function calculatePercentage(partialValue, totalValue) {
  return (100 * partialValue) / totalValue
}

export function percentageBetweenRange(input, min, max) {
  return ((input - min) * 100) / (max - min)
}
