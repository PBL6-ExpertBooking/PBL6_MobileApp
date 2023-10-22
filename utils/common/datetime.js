export function ISODateStringToDateString(str) {
  const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/
  if (!regex.test(str)) return null
  const date = new Date(str)
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const year = date.getFullYear()
  return `${month}-${day}-${year}`
}
