import { useContext, useEffect, useState } from 'react'
import { BottomNavigation } from 'react-native-paper'
import { AuthContext } from '../../../contexts'
import * as Routes from './routes'

import DashBoard from './SubScreens/DashBoard'
import ExpertSearch from './SubScreens/ExpertSearch'
import Profiles from './SubScreens/Profiles'
import { styles } from './style.module'
import RenderButton from './button'

export default function MainScreen() {
  const [index, setIndex] = useState(0)
  const { user } = useContext(AuthContext)

  const [routes, setRoutes] = useState(Routes.guestRoutes)

  const renderScene = BottomNavigation.SceneMap({
    dashboard: DashBoard,
    search: ExpertSearch,
    profiles: Profiles,
  })

  useEffect(() => {
    if (user?._id)
      if (user.isConfirmed) setRoutes(Routes.userRoutes)
      else setRoutes(Routes.guestRoutes)
  }, [user?._id])

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
