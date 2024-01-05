import React from 'react'
import { View, Text } from 'react-native'
import { styles, textStyles } from './style.module'
import { Avatar, IconButton } from 'react-native-paper'
import { useTranslation } from 'react-i18next'
import { datetimeHelper, nameUltils } from '../../../../../../../utils'

export default function NewJobRequest({ item }) {
  const { ref, is_seen, createdAt, updatedAt } = item
  const { user, title } = ref.job_request

  const { t } = useTranslation()

  return (
    <View style={[styles.container, !is_seen && { backgroundColor: '#F0F0F0' }]}>
      <View>
        <Avatar.Image source={{ uri: user.photo_url }} size={50} />
      </View>
      <View>
        <View>
          <View>
            <Text>
              <Text style={textStyles.username}>
                {nameUltils.getNameString(user)}
              </Text>
              {' ' + t('newJobRequestNotif')}
            </Text>
            <Text>
              {t('title')}: {title}
            </Text>
            <View style={styles.dateContainer}>
              <IconButton
                icon={is_seen ? 'clock-check-outline' : 'clock-alert-outline'}
                style={styles.clockIcon}
                size={15}
              />
              <Text style={textStyles.date}>
                {is_seen && t('seenOn')}{' '}
                {datetimeHelper.getTimeAgoString(is_seen ? updatedAt : createdAt)}
              </Text>
            </View>
          </View>
          <View></View>
        </View>
      </View>
    </View>
  )
}
