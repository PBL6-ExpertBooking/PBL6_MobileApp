import { API_ENDPOINT } from '../constants'

export const urlConfig = {
  authentication: {
    login: `${API_ENDPOINT}/auth/login`,
    register: `${API_ENDPOINT}/auth/register`,
    logout: `${API_ENDPOINT}/auth/logout`,
    refreshToken: `${API_ENDPOINT}/auth/refresh-token`,
  },
  user: {
    info: `${API_ENDPOINT}/users/current`,
    users: `${API_ENDPOINT}/users`,
  },
  expert: {},
}
