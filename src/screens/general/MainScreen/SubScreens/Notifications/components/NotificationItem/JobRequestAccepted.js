import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles, textStyles } from './style.module'
import { Avatar, IconButton } from 'react-native-paper'
import { useTranslation } from 'react-i18next'
import { datetimeHelper, nameUltils } from '../../../../../../../utils'
import { RootNavigate } from '../../../../../../../navigation'
import { SCREEN } from '../../../../../../../constants'
import { defaultAvatar } from '../../../../../../../../assets'

export default function JobRequestAccepted({ item }) {
  const { ref, is_seen, createdAt, updatedAt } = item
  const { expert, title } = ref.job_request

  const { t } = useTranslation()

  return expert ? (
    <View style={[styles.container, !is_seen && { backgroundColor: '#F0F0F0' }]}>
      <TouchableOpacity
        onPress={() =>
          RootNavigate.navigate(SCREEN.EXPERT_PROFILE, {
            info: expert,
            refetchData: true,
          })
        }
      >
        <Avatar.Image
          source={
            expert.user.photo_url ? { uri: expert.user.photo_url } : defaultAvatar
          }
          size={50}
        />
      </TouchableOpacity>
      <View style={styles.dataContainer}>
        <View>
          <View>
            <Text style={[textStyles.text]}>
              <Text style={textStyles.username}>
                {nameUltils.getNameString(expert.user)}
              </Text>
              {' ' + t('acceptJobRequestNotif')}
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
  ) : (
    <></>
  )
}
