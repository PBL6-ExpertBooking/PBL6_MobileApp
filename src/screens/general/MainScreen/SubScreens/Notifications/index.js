import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles, textStyles } from './style.module'
import { pushNotificationService, userService } from '../../../../../services'
import NotificationItem from './components/NotificationItem'
import { useTranslation } from 'react-i18next'
import { ActivityIndicator, IconButton } from 'react-native-paper'

export default function Notifications() {
  const [notifications, setNotifications] = useState([])
  const [loading, setLoading] = useState(false)

  const { t } = useTranslation()

  useEffect(() => {
    const getNotifications = async ({ showLoading = false }) => {
      showLoading && setLoading(true)
      const data = await userService.getNotifications({ limit: 10 })
      setNotifications(data.notifications)
      setLoading(false)
    }
    getNotifications({ showLoading: true })

    const subscription = pushNotificationService.addEventListener(() => {
      getNotifications({ showLoading: false })
    })

    return () => {
      pushNotificationService.removeEventListener(subscription)
    }
  }, [])

  const seenAll = async () => {
    await Promise.all(
      notifications
        .filter((item) => !item.is_seen)
        .map((item) => {
          userService.markSeenNotification(item._id)
        }),
    )
    setNotifications((notifications) =>
      notifications.map((item) => ({ ...item, is_seen: true })),
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={textStyles.title}>{t('notifications')}</Text>
        <TouchableOpacity
          style={styles.readAll}
          onPress={seenAll}
          disabled={loading}
        >
          <IconButton icon="check-all" iconColor="green" />
        </TouchableOpacity>
      </View>
      {loading && <ActivityIndicator style={{ flex: 1 }} animating size="large" />}
      {!loading && (
        <View style={styles.dataContainer}>
          <ScrollView contentContainerStyle={styles.dataContentContainer}>
            {notifications.map((item) => (
              <NotificationItem key={item._id} item={item} />
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  )
}
