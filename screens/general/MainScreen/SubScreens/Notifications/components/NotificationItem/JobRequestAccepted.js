import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles, textStyles } from './style.module'
import { Avatar, IconButton } from 'react-native-paper'
import { useTranslation } from 'react-i18next'
import { datetimeHelper, nameUltils } from '../../../../../../../utils'
import { expertService } from '../../../../../../../services'
import { RootNavigate } from '../../../../../../../navigation'
import { SCREEN } from '../../../../../../../constants'

export default function JobRequestAccepted({ item }) {
  const { ref, is_seen, createdAt, updatedAt } = item
  const { expert, title } = ref.job_request

  const [expertInfo, setExpertInfo] = useState(null)

  useEffect(() => {
    const getExpertInfo = async () => {
      const data = await expertService.getExpertById(expert)
      setExpertInfo(data.expert)
    }
    getExpertInfo()
  }, [])

  const { t } = useTranslation()

  return expertInfo ? (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          RootNavigate.navigate(SCREEN.EXPERT_PROFILE, { info: expertInfo })
        }
      >
        <Avatar.Image source={{ uri: expertInfo.user.photo_url }} size={50} />
      </TouchableOpacity>
      <View style={styles.dataContainer}>
        <View>
          <View>
            <Text style={[textStyles.text]}>
              <Text style={textStyles.username}>
                {nameUltils.getNameString(expertInfo.user)}
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
