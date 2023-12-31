import axios from 'axios'
import * as SecureStore from 'expo-secure-store'
import { HTTP_STATUS, SCREEN } from '../../constants'
import { routes, API_ENDPOINT } from '../../api/config'
import { RootNavigate } from '../../navigation'
import * as storeUtils from '../common/store'

export const AxiosInterceptors = axios.create({
  baseURL: API_ENDPOINT,
  timeout: 300000,
})

AxiosInterceptors.interceptors.response.use(
  (response) => {
    return response.data
  },
  async function (error) {
    const originalRequest = error.config
    if (error.response.status === HTTP_STATUS.FORBIDDEN && !originalRequest._retry) {
      originalRequest._retry = true
      const access_token = await refreshAccessToken()
      AxiosInterceptors.defaults.headers.common.Authorization =
        'Bearer ' + access_token
      return AxiosInterceptors(originalRequest)
    }
    return Promise.reject(error)
  },
)

const refreshAccessToken = async () => {
  const refresh_token = await SecureStore.getItemAsync('refresh_token')
  const response = await axios
    .post(routes.authentication.refreshToken, { refresh_token })
    .then((response) => {
      return response
    })
    .catch(() => {
      storeUtils.clearTokens()
      RootNavigate.navigate(SCREEN.HOME)
    })
  await SecureStore.setItemAsync('access_token', response.data.access_token)
  return response.data.access_token
}
