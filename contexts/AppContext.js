import { createContext, useEffect, useState } from 'react'
import { expertService } from '../services'

export const AppContext = createContext(null)

export default function AppContextProvider({ children }) {
  const [majors, setMajor] = useState([])

  useEffect(() => {
    const getMajors = async () => {
      const response = await expertService.getAllMajors()
      setMajor(response.majors)
    }
    getMajors()
  }, [])

  return <AppContext.Provider value={{ majors }}>{children}</AppContext.Provider>
}
