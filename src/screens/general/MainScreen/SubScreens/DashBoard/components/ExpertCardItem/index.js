import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles, textStyles } from './style.module'
import { SCREEN } from '../../../../../../../constants'
import { useNavigation } from '@react-navigation/native'
import { nameUltils, popupUtils } from '../../../../../../../utils'
import { useTranslation } from 'react-i18next'
import { IconButton } from 'react-native-paper'
import { defaultAvatar } from '../../../../../../../../assets'

export default function ExpertCardItem({ info, accessAuthorized }) {
  const { user, certificates, average_rating } = info
  const navigation = useNavigation()

  const { t } = useTranslation()

  return (
    <TouchableOpacity
      onPress={() =>
        accessAuthorized
          ? navigation.navigate(SCREEN.EXPERT_PROFILE, { info })
          : popupUtils.error.popupMessage({ message: t('notAuthorizedMessage') })
      }
      style={styles.container}
      activeOpacity={0.6}
    >
      <View style={styles.leftAlign}>
        <Image
          source={user.photo_url ? { uri: user.photo_url } : defaultAvatar}
          style={styles.avatar}
        />
        <View>
          <Text style={[textStyles.name]}>{nameUltils.getNameString(user)}</Text>
          <View style={styles.expertDataContainer}>
            <View style={styles.expertData}>
              <Text style={[textStyles.dataText]}>
                {Math.round(average_rating * 10) / 10}
              </Text>
              <View style={styles.iconContainer}>
                <IconButton
                  icon="star"
                  style={styles.icon}
                  size={15}
                  iconColor="gold"
                />
              </View>
            </View>
            {certificates.length > 0 && (
              <View style={styles.expertData}>
                <Text style={[textStyles.dataText]}>{certificates.length}</Text>
                <View style={styles.iconContainer}>
                  <IconButton icon="certificate" style={styles.icon} size={15} />
                </View>
              </View>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}
