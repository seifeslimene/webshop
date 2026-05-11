export default function formatNumber(n) {
  if (n >= 0) {
    let newNumber = n.toString()

    return newNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  return ''
}
