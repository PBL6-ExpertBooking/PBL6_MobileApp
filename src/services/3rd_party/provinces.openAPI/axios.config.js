import axios from 'axios'

const PROVINCE_OAPI_ENDPOINT = 'https://provinces.open-api.vn/api'

export const provinceInterceptors = axios.create({ baseURL: PROVINCE_OAPI_ENDPOINT })

provinceInterceptors.interceptors.response.use(
  (response) => {
    return response.data
  },
  async function (error) {
    return Promise.reject(error)
  },
)
