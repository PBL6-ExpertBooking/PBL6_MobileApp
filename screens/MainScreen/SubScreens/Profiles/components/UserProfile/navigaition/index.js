import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import UserInfo from '../components/AccountInfo'
import ChangePassword from '../components/ChangePassword'
import Profile from '../components/Profile'

import { PROFILE_SCREEN } from '../../../../../../../constants'

const Stack = createNativeStackNavigator()

export default function ProfileNavigator() {
  return (
    <NavigationContainer independent>
      <Stack.Navigator initialRouteName={PROFILE_SCREEN.HOME}>
        <Stack.Screen
          name={PROFILE_SCREEN.HOME}
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={PROFILE_SCREEN.CHANGE_PWD} component={ChangePassword} />
        <Stack.Screen
          name={PROFILE_SCREEN.ACCOUNT_INFO}
          component={UserInfo}
          options={{ title: 'Profile' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
