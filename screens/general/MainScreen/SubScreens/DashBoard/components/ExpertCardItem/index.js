import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style.module'
import { SCREEN } from '../../../../../../../constants'
import { useNavigation } from '@react-navigation/native'
import { nameUltils, popupUtils } from '../../../../../../../utils'
import { useTranslation } from 'react-i18next'

export default function ExpertCardItem({ info, accessAuthorized }) {
  const { user } = info
  const navigation = useNavigation()

  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <View style={styles.leftAlign}>
        <Image source={{ uri: user.photo_url }} style={styles.avatar} />
        <Text>{nameUltils.getNameString(user)}</Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          accessAuthorized
            ? navigation.navigate(SCREEN.EXPERT_PROFILE, { info })
            : popupUtils.error.popupMessage({ message: t('notAuthorizedMessage') })
        }
      >
        <Text>&gt;&gt;</Text>
      </TouchableOpacity>
    </View>
  )
}
