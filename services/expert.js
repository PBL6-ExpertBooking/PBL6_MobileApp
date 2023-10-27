import { routes } from '../api'
import { AxiosInterceptors } from '../utils'

export async function getExpertPagination({ page, limit }) {
  const response = await AxiosInterceptors.get(routes.expert.getList, {
    params: { page, limit },
  })
  return response
}
