import { createContext, useEffect, useState } from 'react'
import { storeUtils } from '../utils'
import i18n from '../config/i18n'

export const SettingContext = createContext(null)

export default function SettingContextProvider({ children }) {
  const [lng, setLng] = useState(null)

  useEffect(() => {
    const initSetting = async () => {
      const lng = await storeUtils.getLanguage()
      setLng(lng)
    }
    initSetting()
  }, [])

  useEffect(() => {
    if (lng) {
      i18n.changeLanguage(lng)
      storeUtils.setLanguage(lng)
    }
  }, [lng])

  return (
    <SettingContext.Provider value={{ lng, setLng }}>
      {children}
    </SettingContext.Provider>
  )
}
