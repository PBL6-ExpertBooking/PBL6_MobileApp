import { routes } from '../api'
import { AxiosInterceptors } from '../utils'

export async function addJobRequest({
  major_id,
  title,
  descriptions,
  address,
  budget,
}) {
  const response = await AxiosInterceptors.post(routes.jobs.root, {
    major_id,
    title,
    descriptions,
    address,
    budget_min: budget.min,
    budget_max: budget.max,
  })
  return response
}

export async function getJobsPagination({ page, limit, major_id }) {
  const response = await AxiosInterceptors.get(routes.jobs.root, {
    params: { page, limit, major_id },
  })
  return response
}