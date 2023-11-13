import { routes } from '../api'
import { AxiosInterceptors } from '../utils'
import { templatePopupOnRejection } from './common/template'

export async function addJobRequest({
  major_id,
  title,
  descriptions,
  address,
  price,
}) {
  return await templatePopupOnRejection(async () => {
    const response = await AxiosInterceptors.post(routes.jobs.root, {
      major_id,
      title,
      descriptions,
      address,
      price,
    })
    return response
  })
}

export async function getJobsPagination({ page, limit, major_id }) {
  return await templatePopupOnRejection(async () => {
    const response = await AxiosInterceptors.get(routes.expert.recommendedJob, {
      params: { page, limit, major_id },
    })
    return response
  })
}

export async function getCurrentUserRequests({ page, limit, major_id }) {
  return await templatePopupOnRejection(async () => {
    const response = await AxiosInterceptors.get(routes.user.currentJobRequest, {
      params: { page, limit, major_id },
    })
    return response
  })
}

export async function markComplete({ id }) {
  return await templatePopupOnRejection(async () => {
    const response = await AxiosInterceptors.post(routes.jobs.complete(id))
    return response
  })
}

export async function cancelJob({ id }) {
  return await templatePopupOnRejection(async () => {
    const response = await AxiosInterceptors.post(routes.jobs.cancel(id))
    return response
  })
}
