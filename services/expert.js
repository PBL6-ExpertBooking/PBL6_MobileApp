import { routes } from '../api'
import { AxiosInterceptors } from '../utils'

export async function getExpertPagination({ page, limit }) {
  const response = await AxiosInterceptors.get(routes.expert.getList, {
    params: { page, limit },
  })
  return response
}

export async function getAllMajors() {
  const response = await AxiosInterceptors.get(routes.majors)
  return response
}

export async function uploadCertificate({ name, major_id, descriptions, photo }) {
  try {
    const formData = new FormData() // eslint-disable-line
    formData.append('name', name)
    formData.append('major_id', major_id)
    formData.append('descriptions', descriptions)
    formData.append('photo', {
      uri: photo,
      name: 'cert.jpg',
      type: 'image/jpg',
    })

    const response = await AxiosInterceptors.post(
      routes.expert.certificate,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    )
    return response
  } catch {
    return
  }
}

export async function getCertificatesByExpertId(id) {
  const response = await AxiosInterceptors.get(routes.expert.certificateById(id))
  return response.certificates
}

export async function acceptJob({ id }) {
  const response = await AxiosInterceptors.post(routes.expert.acceptJob(id))
  return response
}

export async function getAcceptedJobs({ page, limit, major_id }) {
  const response = await AxiosInterceptors.get(routes.expert.acceptedJobs, {
    params: { page, limit, major_id },
  })
  return response
}
