import { routes } from '../api'
import { HTTP_METHOD } from '../constants'
import { useAxios } from '../hooks'

export async function loginUser({ username, password }) {
  const response = await useAxios({
    url: routes.authentication.login,
    method: HTTP_METHOD.POST,
    body: { username, password },
    formData: true,
  })
  return response
}

export async function updateUser({ access_token, data }) {
  const response = await useAxios({
    url: routes.authentication.login,
    access_token,
    method: HTTP_METHOD.PUT,
    body: data,
  })
  return response
}

export async function getCurrentUserInfo({ access_token }) {
  const response = await useAxios({
    url: routes.user.info,
    access_token,
    method: HTTP_METHOD.GET,
    formData: true,
  })
  return response
}

export async function getCurrentExpertInfo({ access_token }) {
  const response = await useAxios({
    url: routes.expert.info,
    access_token,
    method: HTTP_METHOD.GET,
    formData: true,
  })
  return response
}
