import numbro from 'numbro'

export function percentage(value, options) {
  const number = numbro(value).format({
    trimMantissa: true,
    mantissa: 2,
    forceSign: true,
    ...options
  })

  return `${number}%`
}

export function currency(value, options) {
  return numbro(value).formatCurrency(options)
}

export function volume(value) {
  return numbro(value).format({
    thousandSeparated: true
  })
}

export function priceColor(value) {
  const isPositive = value >= 0
  return {
    'text-success': isPositive,
    'text-danger': !isPositive
  }
}
