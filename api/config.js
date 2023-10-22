export const API_ENDPOINT = 'https://pbl6-server.onrender.com/v1'

export const routes = {
  authentication: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    refreshToken: '/auth/refresh-token',
  },
  user: {
    info: '/users/current',
    users: '/users',
  },
  expert: {
    info: '/experts/current',
  },
}
