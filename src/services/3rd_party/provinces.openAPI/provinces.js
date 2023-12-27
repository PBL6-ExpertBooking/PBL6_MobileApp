import { provinceInterceptors } from './axios.config'

export async function getAllProvinces() {
  const response = await provinceInterceptors.get('/p')
  return response
}

export async function getDistricts({ provinceCode }) {
  const response = await provinceInterceptors.get('/p/' + provinceCode, {
    params: {
      depth: 2,
    },
  })
  return response.districts
}

export async function getWards({ districtCode }) {
  const response = await provinceInterceptors.get('/d/' + districtCode, {
    params: {
      depth: 2,
    },
  })
  return response.wards
}
