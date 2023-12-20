import React, { useState } from 'react'
import { styles, textStyles } from './style.module'
import { Avatar, IconButton } from 'react-native-paper'
import { Text, TouchableOpacity, View } from 'react-native'
import { currencyUtils, datetimeHelper, nameUltils } from '../../../../../utils'
import JobDetailModal from './JobDetailModal'
import { useTranslation } from 'react-i18next'
import { defaultAvatar } from '../../../../../assets'

export default function JobItem({ item, acceptJobCallback }) {
  const [modalVisibility, setModalVisibility] = useState(false)

  const { user, major, price, title, updatedAt } = item

  const showModal = () => setModalVisibility(true)
  const hideModal = () => setModalVisibility(false)

  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar.Image
          source={user.photo_url ? { uri: user.photo_url } : defaultAvatar}
          size={45}
        />
      </View>
      <View style={styles.jobDataContainer}>
        <View style={styles.title}>
          <View style={{ flex: 2 }}>
            <Text style={[textStyles.title]} ellipsizeMode="tail">
              {title}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[textStyles.price]}>
              {currencyUtils.formatCurrency(price)}
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.dataContainer}>
            <Text style={textStyles.fieldName}>{t('from')}:</Text>
            <Text>{nameUltils.getNameString(user)}</Text>
          </View>
          <View style={styles.dataContainer}>
            <Text style={textStyles.fieldName}>{t('major')}:</Text>
            <Text>{major.name}</Text>
          </View>
        </View>
        <View style={styles.btnGroup}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: 'gray', fontSize: 12 }}>{t('lastUpdate')}</Text>
            <Text style={{ fontSize: 13 }}>
              {datetimeHelper.convertISOToNormalDate(updatedAt)}
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={showModal}
            style={styles.button}
          >
            <IconButton
              icon="chevron-right"
              style={{ width: 30, height: 30 }}
              size={30}
              iconColor="white"
            />
          </TouchableOpacity>
        </View>
      </View>
      <JobDetailModal
        visible={modalVisibility}
        hideModal={hideModal}
        data={item}
        acceptJobCallback={acceptJobCallback}
      />
    </View>
  )
}
