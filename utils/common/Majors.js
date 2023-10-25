import { routes } from '../../api'
import { AxiosInterceptors } from '../axios/interceptor'

export const MajorList = []

export async function getMajors() {
  const response = await AxiosInterceptors.get(routes.majors)
  response.majors.forEach((major) => {
    MajorList.push(major)
  })
}
