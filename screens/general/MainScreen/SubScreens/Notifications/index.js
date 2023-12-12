import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles, textStyles } from './style.module'
import { userService } from '../../../../../services'
import NotificationItem from './components/NotificationItem'
import { useTranslation } from 'react-i18next'
import { ActivityIndicator, IconButton } from 'react-native-paper'

export default function Notifications() {
  const [notifications, setNotifications] = useState([])
  const [loading, setLoading] = useState(false)

  const { t } = useTranslation()

  useEffect(() => {
    const getNotifications = async () => {
      setLoading(true)
      const data = await userService.getNotifications({ limit: 10 })
      setNotifications(data.notifications)
      setLoading(false)
    }
    getNotifications()
  }, [])

  const seenAll = async () => {
    const asyncOperations = notifications.map(async (item) => {
      if (!item.is_seen) {
        await userService.markSeenNotification(item._id)
      }
    })
    await Promise.all(asyncOperations)
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
