import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home'
import Login from '../screens/Login'
import DashBoard from '../screens/DashBoard'
import ExpertSearch from '../screens/ExpertSearch'
import ExpertDetails from '../screens/ExpertDetails'
import Register from '../screens/Register'
import { SCREEN } from '../constants'

const Stack = createNativeStackNavigator()

export default function Navigators() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREEN.HOME}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={SCREEN.HOME} component={Home} />
        <Stack.Screen name={SCREEN.LOGIN} component={Login} />
        <Stack.Screen name={SCREEN.REGISTER} component={Register} />
        <Stack.Screen name={SCREEN.DASHBOARD} component={DashBoard} />
        <Stack.Screen name={SCREEN.EXPERT_SEARCH} component={ExpertSearch} />
        <Stack.Screen name={SCREEN.EXPERT_DETAILS} component={ExpertDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
