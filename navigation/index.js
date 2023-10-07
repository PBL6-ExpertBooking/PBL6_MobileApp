import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { navigationRef } from './root'

import Home from '../screens/Home'
import Login from '../screens/Login'
import MainScreen from '../screens/MainScreen'
import Register from '../screens/Register'
import ExpertProfile from '../screens/ExpertProfile'
import { SCREEN } from '../constants'

const Stack = createNativeStackNavigator()

export default function Navigators() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={SCREEN.HOME}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={SCREEN.HOME} component={Home} />
        <Stack.Screen name={SCREEN.LOGIN} component={Login} />
        <Stack.Screen name={SCREEN.REGISTER} component={Register} />
        <Stack.Screen name={SCREEN.DASHBOARD} component={MainScreen} />
        <Stack.Screen
          name={SCREEN.EXPERT_PROFILE}
          component={ExpertProfile}
          options={{ headerShown: true, title: 'Expert Profile' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
