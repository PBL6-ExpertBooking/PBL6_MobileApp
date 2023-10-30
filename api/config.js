export const API_ENDPOINT = 'https://pbl6-server.onrender.com/v1'

export const routes = {
  authentication: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    refreshToken: '/auth/refresh-token',
  },
  user: {
    infoCurrent: '/users/current',
    users: '/users',
  },
  expert: {
    getList: '/experts',
    infoCurrent: '/experts/current',
  },
  majors: '/majors',
  jobs: {
    root: '/job_requests',
  },
}
