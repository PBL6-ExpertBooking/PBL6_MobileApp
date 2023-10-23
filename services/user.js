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
  const response = await AxiosInterceptors.put(routes.user.info, {
    first_name,
    last_name,
    gender,
    phone,
    address,
    DoB,
  })
  return response
}
