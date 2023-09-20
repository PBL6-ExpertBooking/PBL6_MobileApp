import axios from 'axios'
import { SERVER_URL, ROUTE } from '../api'

export const loginUser = async ({ username, password }) => {
  const response = await axios.post(SERVER_URL + ROUTE.v1.AUTH.LOGIN, {
    username,
    password,
  })
  return response.data
}
