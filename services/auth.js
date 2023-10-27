import { routes } from '../api'
import { AxiosInterceptors } from '../utils'

export async function loginUser({ username, password }) {
  const response = await AxiosInterceptors.post(routes.authentication.login, {
    username,
    password,
  })
  return response
}

export async function getCurrentUserInfo() {
  const response = await AxiosInterceptors.get(routes.user.infoCurrent)
  return response
}

export async function getCurrentExpertInfo() {
  const response = await AxiosInterceptors.get(routes.expert.infoCurrent)
  return response
}

export async function logout() {}
