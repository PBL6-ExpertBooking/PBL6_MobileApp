import React from 'react'
import { NOTIFICATION } from '../../../../../../../constants'
import NewJobRequest from './NewJobRequest'

export default function NotificationItem({ item }) {
  const { type } = item

  if (type === NOTIFICATION.TYPE.NEW_JOB_REQUEST)
    return <NewJobRequest item={item} />
  else return <></>
}
