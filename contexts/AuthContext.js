import { createContext, useEffect, useState } from 'react'
import { ROLE } from '../constants'
import { authService } from '../services'

export const AuthContext = createContext(null)

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null)
  const [expertInfo, setExpertInfo] = useState(null)
  const [tokens, setTokens] = useState(null)

  useEffect(() => {
    if (user?.role === ROLE.EXPERT) {
      const getExpertInfo = async () => {
        const response = await authService.getCurrentExpertInfo({
          access_token: tokens.access_token,
        })
        delete response.expert.user
        setExpertInfo(response.expert)
      }
      getExpertInfo()
    }
  }, [tokens?.access_token])

  return (
    <AuthContext.Provider value={{ user, tokens, expertInfo, setUser, setTokens }}>
      {children}
    </AuthContext.Provider>
  )
}
