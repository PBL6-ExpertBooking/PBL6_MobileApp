export const API_ENDPOINT = 'https://pbl6-server.onrender.com/v1'

export const routes = {
  authentication: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    refreshToken: '/auth/refresh-token',
    google: '/auth/google',
  },
  user: {
    infoCurrent: '/users/current',
    users: '/users',
    currentJobRequest: '/users/current/job_requests',
    currentTransactions: '/users/current/transactions',
    postReview: '/reviews',
    promoteExpert: '/users/current/promote-to-expert',
    notifications: '/users/current/notifications',
    password: '/users/current/password',
    seenNotification: (id) => `/users/current/notifications/${id}/seen`,
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
    currentCreditCard: '/experts/current/bank-account',
    withdrawal: '/withdrawal-requests',
  },
  majors: '/majors',
  jobs: {
    root: '/job_requests',
    byId: (id) => `/job_requests/${id}`,
    cancel: (id) => `/job_requests/${id}/cancel`,
    complete: (id) => `/job_requests/${id}/complete`,
  },
  transaction: {
    deposit: '/transactions/deposit',
    paymentUrl: '/transactions/payment',
    executePayment: (id) => `/transactions/payment/${id}/execute`,
  },
  reports: {
    root: '/reports',
  },
}
