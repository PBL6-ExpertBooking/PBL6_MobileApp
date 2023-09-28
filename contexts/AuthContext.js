import { createContext, useState } from 'react'

export const AuthContext = createContext(null)

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState({
    first_name: 'Tran Minh',
    last_name: 'Nhat',
    email: 'minhnhat912002@gmail.com',
    username: 'tmnhat1810',
    role: 'USER',
  })
  const [tokens, setTokens] = useState(null)

  return (
    <AuthContext.Provider value={{ user, tokens, setUser, setTokens }}>
      {children}
    </AuthContext.Provider>
  )
}
