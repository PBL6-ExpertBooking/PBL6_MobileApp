import React from 'react'
import { NOTIFICATION } from '../../../../../../../constants'
import NewJobRequest from './NewJobRequest'
import JobRequestAccepted from './JobRequestAccepted'
import JobRequestCancel from './JobRequestCancel'
import Payment from './Payment'

export default function NotificationItem({ item }) {
  const { type } = item

  if (type === NOTIFICATION.TYPE.NEW_JOB_REQUEST)
    return <NewJobRequest item={item} />
  if (type === NOTIFICATION.TYPE.JOB_REQUEST_ACCEPTED)
    return <JobRequestAccepted item={item} />
  if (type === NOTIFICATION.TYPE.JOB_REQUEST_CANCELED)
    return <JobRequestCancel item={item} />
  if (type === NOTIFICATION.TYPE.PAYMENT) return <Payment item={item} />
  return <></>
}
