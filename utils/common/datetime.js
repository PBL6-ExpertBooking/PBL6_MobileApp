function padZero(number) {
  return number.toString().padStart(2, '0')
}

export function getFormatedStringfromISODate(date) {
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const year = date.getFullYear()
  return `${month}-${day}-${year}`
}

export function ISODateStringToDateString(str) {
  const date = new Date(str)
  if (isNaN(date)) return null
  return getFormatedStringfromISODate(date)
}

export function convertISOToNormalDate(isoDateString) {
  const date = new Date(isoDateString)

  if (isNaN(date)) return null

  const month = date.getMonth() + 1
  const day = date.getDate()
  const year = date.getFullYear()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  const formattedDate = `${padZero(month)}-${padZero(day)}-${year}`
  const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`

  return `${formattedDate} ${formattedTime}`
}

export function daysDiffToNow(isoDateString) {
  const now = new Date()
  const date = new Date(isoDateString)
  return Math.floor((now.getTime() - date.getTime()) / 1000 / 60 / 60 / 24)
}
