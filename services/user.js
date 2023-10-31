import { routes } from '../api'
import { AxiosInterceptors } from '../utils'

export async function updateInfoCurrent({
  first_name,
  last_name,
  gender,
  phone,
  address,
  DoB,
}) {
  const response = await AxiosInterceptors.put(routes.user.infoCurrent, {
    first_name,
    last_name,
    gender,
    phone,
    address,
    DoB,
  })
  return response
}

export async function updateUserAvatar(photo) {
  try {
    const formData = new FormData() // eslint-disable-line
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
