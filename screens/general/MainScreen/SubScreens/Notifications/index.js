import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { styles, textStyles } from './style.module'
import { userService } from '../../../../../services'
import NotificationItem from './components/NotificationItem'
import { useTranslation } from 'react-i18next'
import { ActivityIndicator } from 'react-native-paper'

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

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={textStyles.title}>{t('notifications')}</Text>
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
