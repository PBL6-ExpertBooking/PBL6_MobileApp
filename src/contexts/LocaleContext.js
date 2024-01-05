import { createContext, useEffect, useState } from 'react'
import { storeUtils, toastUltis } from '../utils'
import i18n from '../config/i18n'
import { pushNotificationService } from '../services'

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

  useEffect(() => {
    const subscription = pushNotificationService.addEventListener(() => {
      toastUltis.show({
        title: i18n.t('newNotification'),
        message: i18n.t('youHaveNewNotification'),
      })
    })

    return () => {
      pushNotificationService.removeEventListener(subscription)
    }
  }, [])

  return (
    <SettingContext.Provider value={{ lng, setLng }}>
      {children}
    </SettingContext.Provider>
  )
}
