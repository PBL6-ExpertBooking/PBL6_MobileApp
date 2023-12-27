import * as Notifications from 'expo-notifications'
import Constants from 'expo-constants'
import { AxiosInterceptors } from '../../../utils'
import { routes } from '../../../api'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
})

export async function registerService() {
  Notifications.setNotificationChannelAsync('default', {
    name: 'default',
    importance: Notifications.AndroidImportance.MAX,
    vibrationPattern: [0, 250, 250, 250],
    lightColor: '#FF231F7C',
  })

  const { status: existingStatus } = await Notifications.getPermissionsAsync()
  let finalStatus = existingStatus
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync()
    finalStatus = status
  }
  if (finalStatus !== 'granted') {
    return
  }
  const token = await Notifications.getExpoPushTokenAsync({
    projectId: Constants.expoConfig.extra.eas.projectId,
  })

  return token.data
}

export async function sendPushToken({ token, role }) {
  const response = await AxiosInterceptors.post(routes.pushToken, {
    token,
    role,
  })
  return response
}

export async function addEventListener(handler) {
  return Notifications.addNotificationReceivedListener(handler)
}

export async function removeEventListener(subscription) {
  Notifications.removeNotificationSubscription(subscription)
}
