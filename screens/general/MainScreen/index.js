import { useContext, useEffect, useRef, useState } from 'react'
import { BackHandler, ToastAndroid } from 'react-native'
import { BottomNavigation } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../../contexts'
import { SCREEN } from '../../../constants'
import { styles } from './style.module'
import * as Routes from './routes'
import RenderButton from './button'

import DashBoard from './SubScreens/DashBoard'
import ExpertSearch from './SubScreens/ExpertSearch'
import Profiles from './SubScreens/Profiles'
import Notifications from './SubScreens/Notifications'
import { t } from 'i18next'

export default function MainScreen() {
  const [index, setIndex] = useState(0)
  const { user } = useContext(AuthContext)

  const navigation = useNavigation()

  const [routes, setRoutes] = useState(Routes.guestRoutes)

  const renderScene = BottomNavigation.SceneMap({
    dashboard: DashBoard,
    search: ExpertSearch,
    profiles: Profiles,
    notifications: Notifications,
  })

  const indexRef = useRef(index)
  const exit = useRef(false)

  useEffect(() => {
    indexRef.current = index
  }, [index])

  useEffect(() => {
    if (user?._id)
      if (user.isConfirmed) setRoutes(Routes.userRoutes)
      else setRoutes(Routes.guestRoutes)
  }, [user?._id])

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      const navigationStack = navigation.getState().routes
      if (navigationStack[navigationStack.length - 1].name === SCREEN.DASHBOARD) {
        if (indexRef.current !== 0) setIndex(0)
        else {
          if (exit.current) BackHandler.exitApp()
          else {
            ToastAndroid.show(t('backAgainToExit'), 200)
            exit.current = true
            //eslint-disable-next-line
            setTimeout(() => {
              exit.current = false
            }, 2000)
          }
        }
        return true
      }
    })

    return () => {
      backHandler.remove()
    }
  }, [])

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={styles.barStyle}
      renderTouchable={(route) => (
        <RenderButton
          key={route.key}
          index={routes.findIndex((r) => r.key === route.key)}
          route={route.route}
          onPress={(index) => setIndex(index)}
          selected={routes.findIndex((r) => r.key === route.key) === index}
        />
      )}
      sceneAnimationEnabled
    />
  )
}
