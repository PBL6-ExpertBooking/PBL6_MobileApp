import { createContext, useEffect, useState } from 'react'
import { ROLE } from '../constants'
import { authService } from '../services'
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

  useEffect(() => {
    if (user?.role === ROLE.EXPERT) {
      getExpertInfo()
    }
  }, [user?._id])

  useEffect(() => {
    const getStoredUserData = async () => {
      const tokens = await storeUtils.getTokens()
      if (!tokens?.access_token) return
      try {
        tokenUtils.setAxiosAccessToken(tokens.access_token)
        const { user } = await authService.getCurrentUserInfo()
        setUser({ ...user, DoB: datetimeHelper.ISODateStringToDateString(user.DoB) })
      } catch {
        return
      }
    }
    getStoredUserData()
  }, [])

  return (
    <AuthContext.Provider value={{ user, expertInfo, setUser, getExpertInfo }}>
      {children}
    </AuthContext.Provider>
  )
}
