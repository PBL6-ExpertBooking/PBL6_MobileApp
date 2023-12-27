import { AxiosInterceptors } from './interceptor'

export function setAxiosAccessToken(access_token) {
  AxiosInterceptors.defaults.headers.common.Authorization = 'Bearer ' + access_token
}
