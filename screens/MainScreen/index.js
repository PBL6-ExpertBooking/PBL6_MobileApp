import { useContext, useState } from 'react'
import { BottomNavigation } from 'react-native-paper'
import { AuthContext } from '../../contexts'
import * as Routes from './routes'

import DashBoard from './SubScreens/DashBoard'
import ExpertSearch from './SubScreens/ExpertSearch'
import Profiles from './SubScreens/Profiles'
import TransactionHistory from './SubScreens/TransactionHistory'

export default function MainScreen() {
  const [index, setIndex] = useState(0)
  const { user } = useContext(AuthContext)

  const [routes] = useState(user ? Routes.userRoutes : Routes.guestRoutes)

  const renderScene = BottomNavigation.SceneMap({
    dashboard: DashBoard,
    history: TransactionHistory,
    search: ExpertSearch,
    profiles: Profiles,
  })

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ height: 55 }}
    />
  )
}
