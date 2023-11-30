import { createContext, useEffect, useState } from 'react'
import { expertService, provinceService } from '../services'
import { storeUtils } from '../utils'

export const AppContext = createContext(null)

export default function AppContextProvider({ children }) {
  const [majors, setMajor] = useState([])
  const [provinces, setProvinces] = useState([])

  const majorFilterList = [
    ...majors,
    {
      _id: '',
      name: 'None',
      descriptions: 'Nothing chosen',
      deleted: false,
      __v: 0,
    },
  ]

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
    <AppContext.Provider value={{ majors, majorFilterList, provinces }}>
      {children}
    </AppContext.Provider>
  )
}
