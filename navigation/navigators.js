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
  Setting,
  TransactionHistory,
  Feedback,
} from '../screens/general'
import { RequestPost, CurrentRequest } from '../screens/user'
import {
  JobList,
  JobRequest,
  Statitics,
  Certificate,
  CreditCardManagement,
} from '../screens/expert'
import { SCREEN } from '../constants'
import { navigationRef } from './root'
import { styles } from './header.common'
import { useTranslation } from 'react-i18next'

const Stack = createNativeStackNavigator()

export default function Navigator() {
  const { t } = useTranslation()

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
          options={{ headerShown: true, title: t('jobRequest'), ...styles }}
        />
        <Stack.Screen
          name={SCREEN.STATITICS}
          component={Statitics}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name={SCREEN.CERTIFICATE}
          component={Certificate}
          options={{ headerShown: true, title: t('certificate'), ...styles }}
        />
        <Stack.Screen
          name={SCREEN.EXPERT_CERTIFICATE}
          component={ExpertCertificate}
          options={{ headerShown: true, title: t('certificate'), ...styles }}
        />
        <Stack.Screen
          name={SCREEN.CURRENT_REQUEST}
          component={CurrentRequest}
          options={{ headerShown: true, title: t('yourJobRequests'), ...styles }}
        />
        <Stack.Screen
          name={SCREEN.SETTING}
          component={Setting}
          options={{ headerShown: true, title: t('setting'), ...styles }}
        />
        <Stack.Screen
          name={SCREEN.TRANSACTION_HISTORY}
          component={TransactionHistory}
          options={{ headerShown: true, title: t('transactionHistory'), ...styles }}
        />
        <Stack.Screen
          name={SCREEN.FEEDBACK}
          component={Feedback}
          options={{
            headerShown: true,
            title: t('feedback'),
            ...styles,
          }}
        />
        <Stack.Screen
          name={SCREEN.CREDIT_CARD_MANAGEMENT}
          component={CreditCardManagement}
          options={{
            headerShown: true,
            title: t('creditCardManagement'),
            ...styles,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
