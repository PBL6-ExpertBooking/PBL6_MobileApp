import { useState } from 'react'
import { BottomNavigation } from 'react-native-paper'

import DashBoard from './SubScreens/DashBoard'
import ExpertSearch from './SubScreens/ExpertSearch'
import Profiles from './SubScreens/Profiles'

export default function MainScreen() {
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    {
      key: 'dashboard',
      title: 'DashBoard',
      focusedIcon: 'bulletin-board',
    },
    { key: 'search', title: 'Search', focusedIcon: 'account-search' },
    { key: 'profiles', title: 'Profiles', focusedIcon: 'account-search' },
  ])

  const renderScene = BottomNavigation.SceneMap({
    dashboard: DashBoard,
    search: ExpertSearch,
    profiles: Profiles,
  })

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  )
}
