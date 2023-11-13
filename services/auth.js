import { routes } from '../api'
import { AxiosInterceptors } from '../utils'
import { templatePopupOnRejection } from './common/template'

export async function loginUser({ username, password }) {
  const response = await AxiosInterceptors.post(routes.authentication.login, {
    username,
    password,
  })
  return response
}

export async function getCurrentUserInfo() {
  return await templatePopupOnRejection(async () => {
    const response = await AxiosInterceptors.get(routes.user.infoCurrent)
    return response
  })
}

export async function getCurrentExpertInfo() {
  return await templatePopupOnRejection(async () => {
    const response = await AxiosInterceptors.get(routes.expert.infoCurrent)
    return response
  })
}

export async function logout() {}
