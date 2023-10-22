import { createContext, useEffect, useState } from 'react'
import { ROLE } from '../constants'
import { authService } from '../services'
import { TokenUtils, datetimeHelper } from '../utils'

export const AuthContext = createContext(null)

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null)
  const [expertInfo, setExpertInfo] = useState(null)

  useEffect(() => {
    if (user?.role === ROLE.EXPERT) {
      const getExpertInfo = async () => {
        const response = await authService.getCurrentExpertInfo()
        delete response.expert.user
        setExpertInfo(response.expert)
      }
      getExpertInfo()
    }
  }, [user?._id])

  useEffect(() => {
    const getStoredUserData = async () => {
      const tokens = await TokenUtils.getTokens()
      if (!tokens?.access_token) return
      TokenUtils.setAxiosAccessToken(tokens.access_token)
      const { user } = await authService.getCurrentUserInfo()
      setUser({ ...user, DoB: datetimeHelper.ISODateStringToDateString(user.DoB) })
    }
    getStoredUserData()
  }, [])

  return (
    <AuthContext.Provider value={{ user, expertInfo, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
