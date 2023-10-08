import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { navigationRef } from './root'

import Home from '../screens/Home'
import Login from '../screens/Login'
import MainScreen from '../screens/MainScreen'
import Register from '../screens/Register'
import ExpertProfile from '../screens/ExpertProfile'
import JobList from '../screens/ExpertView/JobList'
import JobRequest from '../screens/ExpertView/JobRequest'
import Statitics from '../screens/ExpertView/Statitics'

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
        <Stack.Screen
          name={SCREEN.JOB_LIST}
          component={JobList}
          options={{ headerShown: true, title: 'Job List' }}
        />
        <Stack.Screen
          name={SCREEN.JOB_REQUEST}
          component={JobRequest}
          options={{ headerShown: true, title: 'Job Requests' }}
        />
        <Stack.Screen
          name={SCREEN.STATITICS}
          component={Statitics}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
