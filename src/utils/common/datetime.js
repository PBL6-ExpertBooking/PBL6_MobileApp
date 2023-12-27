import { t } from 'i18next'

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

export function getTimeAgoString(datetime) {
  const currentTime = new Date()
  const previousTime = new Date(datetime)

  const timeDifference = currentTime - previousTime
  const minutes = Math.floor(timeDifference / 60000)
  const hours = Math.floor(timeDifference / 3600000)
  const days = Math.floor(timeDifference / 86400000)

  if (minutes < 60) {
    return `${minutes} ${minutes !== 1 ? t('minutes') : t('minute')} ${t('ago')}`
  } else if (hours < 24) {
    return `${hours} ${hours !== 1 ? t('hours') : t('hour')} ${t('ago')}`
  } else {
    return `${days} ${days !== 1 ? t('days') : t('day')} ${t('ago')}`
  }
}
