import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home'
import Login from '../screens/Login'
import DashBoard from '../screens/DashBoard'
import ExpertSearch from '../screens/ExpertSearch'
import ExpertDetails from '../screens/ExpertDetails'

const Stack = createNativeStackNavigator()

export default function Navigators() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="DashBoard" component={DashBoard} />
        <Stack.Screen name="Expert-Search" component={ExpertSearch} />
        <Stack.Screen name="Expert-Details" component={ExpertDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
