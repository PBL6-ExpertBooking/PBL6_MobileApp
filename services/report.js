import { routes } from '../api'
import { AxiosInterceptors } from '../utils'

export async function post({ title, description, photo }) {
  const formData = new FormData() // eslint-disable-line
  formData.append('title', title)
  formData.append('description', description)
  if (photo)
    formData.append('photo', {
      uri: photo,
      name: 'avatar.jpg',
      type: 'image/jpg',
    })
  const response = await AxiosInterceptors.post(routes.reports.root, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  return response
}
