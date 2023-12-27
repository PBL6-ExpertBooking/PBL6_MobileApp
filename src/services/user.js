import { routes } from '../api'
import { AxiosInterceptors } from '../utils'
import { templatePopupOnRejection } from './common/template'

export async function updateInfoCurrent({
  first_name,
  last_name,
  gender,
  phone,
  address,
  DoB,
}) {
  return await templatePopupOnRejection(async () => {
    const response = await AxiosInterceptors.put(routes.user.infoCurrent, {
      first_name,
      last_name,
      gender,
      phone,
      address: JSON.stringify(address),
      DoB,
    })
    return response
  })
}

export async function updateUserAvatar(photo, currentInfo) {
  try {
    const formData = new FormData() // eslint-disable-line
    formData.append('address', JSON.stringify(currentInfo.address))
    formData.append('photo', {
      uri: photo,
      name: 'avatar.jpg',
      type: 'image/jpg',
    })
    const response = await AxiosInterceptors.put(routes.user.infoCurrent, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return response
  } catch {
    return
  }
}

export async function postExpertReview({ job_request_id, rating, comment }) {
  return await templatePopupOnRejection(async () => {
    const response = await AxiosInterceptors.post(routes.user.postReview, {
      job_request_id,
      rating,
      comment,
    })
    return response
  })
}

export async function promoteExpert(descriptions) {
  return await templatePopupOnRejection(async () => {
    const response = await AxiosInterceptors.post(routes.user.promoteExpert, {
      descriptions,
    })
    return response
  })
}

export async function getNotifications({ limit }) {
  return await templatePopupOnRejection(async () => {
    const response = await AxiosInterceptors.get(routes.user.notifications, {
      params: { limit },
    })
    return response
  })
}

export async function markSeenNotification(id) {
  return await templatePopupOnRejection(async () => {
    const response = await AxiosInterceptors.put(routes.user.seenNotification(id))
    return response
  })
}

export async function changePassword({
  current_password,
  new_password,
  confirm_password,
}) {
  const response = await AxiosInterceptors.put(routes.user.password, {
    current_password,
    new_password,
    confirm_password,
  })
  return response
}
