import axios from 'axios'
import { HTTP_METHOD, HTTP_STATUS } from '../constants'

export async function useAxios(
  url,
  access_token,
  body,
  method = HTTP_METHOD.GET,
  formData = false,
) {
  try {
    if (method === HTTP_METHOD.GET) {
      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      return response
    } else if (method === HTTP_METHOD.POST) {
      const response = await axios.post(url, body, {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      if (response.status === HTTP_STATUS.BAD_REQUEST) {
        const json = await response.json()
        return { success: false, message: json.error }
      }
      if (formData) return await response.json()
      else return { success: true }
    } else if (method === HTTP_METHOD.PUT) {
      const response = await axios.put(url, body, {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      if (response.status === HTTP_STATUS.BAD_REQUEST) {
        const json = await response.json()
        return { success: false, message: json.error }
      }
      if (formData) return response
      else return { success: true }
    } else if (method === HTTP_METHOD.DELETE) {
      const response = await axios.delete(url, {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      if (response.status === HTTP_STATUS.BAD_REQUEST) {
        const json = await response.json()
        return { success: false, message: json.error }
      }
      return { success: true }
    }
  } catch (error) {
    return error.message
  }
}
