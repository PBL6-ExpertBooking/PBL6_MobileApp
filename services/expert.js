import { routes } from '../api'
import { AxiosInterceptors } from '../utils'
import { templatePopupOnRejection } from './common/template'

export async function getExpertPagination({ page, limit }) {
  return await templatePopupOnRejection(async () => {
    const response = await AxiosInterceptors.get(routes.expert.getList, {
      params: { page, limit },
    })
    return response
  })
}

export async function getAllMajors() {
  return await templatePopupOnRejection(async () => {
    const response = await AxiosInterceptors.get(routes.majors)
    return response
  })
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
  return await templatePopupOnRejection(async () => {
    const response = await AxiosInterceptors.get(routes.expert.certificateById(id))
    return response.certificates
  })
}

export async function acceptJob({ id }) {
  return await templatePopupOnRejection(async () => {
    const response = await AxiosInterceptors.post(routes.expert.acceptJob(id))
    return response
  })
}

export async function getAcceptedJobs({ page, limit, major_id }) {
  await templatePopupOnRejection(async () => {
    const response = await AxiosInterceptors.get(routes.expert.acceptedJobs, {
      params: { page, limit, major_id },
    })
    return response
  })
}

export async function getExpertReviews({ id, page, limit }) {
  return await templatePopupOnRejection(async () => {
    const response = await AxiosInterceptors.get(routes.expert.getReviews(id), {
      params: { page, limit },
    })
    return response
  })
}
