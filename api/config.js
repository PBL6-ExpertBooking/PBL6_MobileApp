export const API_ENDPOINT = 'https://pbl6-server.onrender.com/v1'

export const routes = {
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
  expert: {
    info: `${API_ENDPOINT}/experts/current`,
  },
}
