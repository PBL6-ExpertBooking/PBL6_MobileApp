import React from 'react'
import { NOTIFICATION } from '../../../../../../../constants'
import NewJobRequest from './NewJobRequest'
import JobRequestAccepted from './JobRequestAccepted'

export default function NotificationItem({ item }) {
  const { type } = item

  if (type === NOTIFICATION.TYPE.NEW_JOB_REQUEST)
    return <NewJobRequest item={item} />
  else if (type === NOTIFICATION.TYPE.JOB_REQUEST_ACCEPTED)
    return <JobRequestAccepted item={item} />
  return <></>
}
