import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {
  Home,
  Login,
  Register,
  MainScreen,
  AccountInfo,
  ChangePassword,
  ExpertProfile,
  ExpertCertificate,
} from '../screens/general'
import { RequestPost, CurrentRequest } from '../screens/user'
import { JobList, JobRequest, Statitics, Certificate } from '../screens/expert'
import { SCREEN } from '../constants'
import { navigationRef } from './root'

const Stack = createNativeStackNavigator()

export default function Navigator() {
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
          name={SCREEN.ACCOUNT_INFO}
          component={AccountInfo}
          options={{ headerShown: true, title: 'Your Profile' }}
        />
        <Stack.Screen
          name={SCREEN.CHANGE_PWD}
          component={ChangePassword}
          options={{ headerShown: true, title: 'Change Password' }}
        />
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
          name={SCREEN.REQUEST_POST}
          component={RequestPost}
          options={{ headerShown: true, title: 'Post Request' }}
        />
        <Stack.Screen
          name={SCREEN.STATITICS}
          component={Statitics}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name={SCREEN.CERTIFICATE}
          component={Certificate}
          options={{ headerShown: true, title: 'Certificate' }}
        />
        <Stack.Screen
          name={SCREEN.EXPERT_CERTIFICATE}
          component={ExpertCertificate}
          options={{ headerShown: true, title: 'Certificate' }}
        />
        <Stack.Screen
          name={SCREEN.CURRENT_REQUEST}
          component={CurrentRequest}
          options={{ headerShown: true, title: 'Your Job Requests' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}