import { routes } from '../api'
import { AxiosInterceptors } from '../utils'

export async function loginUser({ username, password }) {
  const response = await AxiosInterceptors.post(routes.authentication.login, {
    username,
    password,
  })
  return response
}

export async function updateUser({ data }) {
  const response = await AxiosInterceptors.put(routes.user.info, data)
  return response
}

export async function getCurrentUserInfo() {
  const response = await AxiosInterceptors.get(routes.user.info)
  return response
}

export async function getCurrentExpertInfo() {
  const response = await AxiosInterceptors.get(routes.expert.info)
  return response
}

export async function logout() {}
