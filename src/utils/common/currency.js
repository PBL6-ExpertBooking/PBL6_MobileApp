export function formatCurrency(number) {
  const parts = number.toFixed(0).split('.')
  const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  const currencyString = integerPart + ' đ'
  return currencyString
}
