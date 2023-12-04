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
    currentJobRequest: '/users/current/job_requests',
    currentTransactions: '/users/current/transactions',
    postReview: '/reviews',
  },
  expert: {
    getList: '/experts',
    top: '/experts/top',
    byId: (id) => `/experts/${id}`,
    infoCurrent: '/experts/current',
    certificate: '/certificates',
    recommendedJob: '/experts/current/recommended-job-requests',
    certificateById: (id) => `/experts/${id}/certificates`,
    acceptJob: (id) => `/job_requests/${id}/accept`,
    acceptedJobs: '/experts/current/accepted-job-requests',
    getReviews: (id) => `/experts/${id}/reviews`,
  },
  majors: '/majors',
  jobs: {
    root: '/job_requests',
    cancel: (id) => `/job_requests/${id}/cancel`,
    complete: (id) => `/job_requests/${id}/complete`,
  },
  transaction: {
    deposit: '/transactions/deposit',
    paymentUrl: '/transactions/payment',
    executePayment: (id) => `/transactions/payment/${id}/execute`,
  },
}
