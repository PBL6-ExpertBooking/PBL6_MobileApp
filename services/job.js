import { routes } from '../api'
import { AxiosInterceptors } from '../utils'

export async function addJobRequest({
  major_id,
  title,
  descriptions,
  address,
  budget,
}) {
  const response = await AxiosInterceptors.post(routes.jobs.new, {
    major_id,
    title,
    descriptions,
    address,
    budget_min: budget.min,
    budget_max: budget.max,
  })
  return response
}
