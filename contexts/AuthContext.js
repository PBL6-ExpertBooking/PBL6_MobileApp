import { createContext, useState } from 'react'

export const AuthContext = createContext(null)

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState({
    first_name: 'Tran Minh',
    last_name: 'Nhat',
    email: 'minhnhat912002@gmail.com',
    username: 'tmnhat1810',
    role: 'USER',
    expertInfo: {
      major: 'IT',
      rating: 3.6,
      certificates: [
        {
          major: 'IT',
          description: 'Giải nhất cuộc thi hack nasa bằng html',
          photoURL: '',
          status: 'confirmed',
        },
        {
          major: 'IT',
          description: 'Giải nhất cuộc thi javalorant, htmlol',
          photoURL: '',
          status: 'confirmed',
        },
      ],
    },
  })
  const [tokens, setTokens] = useState(null)

  return (
    <AuthContext.Provider value={{ user, tokens, setUser, setTokens }}>
      {children}
    </AuthContext.Provider>
  )
}
