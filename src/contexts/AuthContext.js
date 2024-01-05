import { createContext, useEffect, useState } from 'react'
import { ROLE } from '../constants'
import { authService, pushNotificationService } from '../services'
import { storeUtils, datetimeHelper, tokenUtils } from '../utils'

export const AuthContext = createContext(null)

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null)
  const [expertInfo, setExpertInfo] = useState(null)

  const getExpertInfo = async () => {
    const response = await authService.getCurrentExpertInfo()
    delete response.expert.user
    setExpertInfo(response.expert)
  }

  const reloadUserInfo = async () => {
    const response = await authService.getCurrentUserInfo()
    if (response)
      setUser({
        ...response.user,
        DoB: datetimeHelper.ISODateStringToDateString(response.user.DoB),
      })
  }

  useEffect(() => {
    if (user) {
      if (user.role === ROLE.EXPERT) {
        getExpertInfo()
      }
      const registerPushNotification = async () => {
        const token = await pushNotificationService.registerService()
        pushNotificationService.sendPushToken({ token })
      }
      registerPushNotification()
    }
  }, [user?._id])

  useEffect(() => {
    const getStoredUserData = async () => {
      const tokens = await storeUtils.getTokens()
      if (!tokens?.access_token) return
      try {
        tokenUtils.setAxiosAccessToken(tokens.access_token)
        reloadUserInfo()
      } catch {
        return
      }
    }
    getStoredUserData()
  }, [])

  return (
    <AuthContext.Provider
      value={{ user, expertInfo, setUser, getExpertInfo, reloadUserInfo }}
    >
      {children}
    </AuthContext.Provider>
  )
}
