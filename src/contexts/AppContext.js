import { createContext, useEffect, useState } from 'react'
import { expertService, provinceService } from '../services'
import { storeUtils } from '../utils'

export const AppContext = createContext(null)

export default function AppContextProvider({ children }) {
  const [majors, setMajor] = useState([])
  const [provinces, setProvinces] = useState([])

  useEffect(() => {
    const initContext = async () => {
      await storeUtils.initLocales()
      const response = await expertService.getAllMajors()
      const provinces = await provinceService.getAllProvinces()
      setProvinces(provinces)
      setMajor(response.majors)
    }
    initContext()
  }, [])

  return (
    <AppContext.Provider value={{ majors, provinces }}>
      {children}
    </AppContext.Provider>
  )
}
