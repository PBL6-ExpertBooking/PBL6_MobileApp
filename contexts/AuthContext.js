import { createContext, useState } from 'react'

export const AuthContext = createContext(null)

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null)
  const [tokens, setTokens] = useState(null)

  return (
    <AuthContext.Provider value={{ user, tokens, setUser, setTokens }}>
      {children}
    </AuthContext.Provider>
  )
}
