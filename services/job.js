import { routes } from '../api'
import { AxiosInterceptors } from '../utils'

export async function addJobRequest({
  major_id,
  title,
  descriptions,
  address,
  price,
}) {
  const response = await AxiosInterceptors.post(routes.jobs.root, {
    major_id,
    title,
    descriptions,
    address,
    price,
  })
  return response
}

export async function getJobsPagination({ page, limit, major_id }) {
  const response = await AxiosInterceptors.get(routes.expert.recommendedJob, {
    params: { page, limit, major_id },
  })
  return response
}

export async function getCurrentUserRequests({ page, limit, major_id }) {
  const response = await AxiosInterceptors.get(routes.user.currentJobRequest, {
    params: { page, limit, major_id },
  })
  return response
}

export async function markComplete({ id }) {
  const response = await AxiosInterceptors.post(routes.jobs.complete(id))
  return response
}

export async function cancelJob({ id }) {
  const response = await AxiosInterceptors.post(routes.jobs.cancel(id))
  return response
}
