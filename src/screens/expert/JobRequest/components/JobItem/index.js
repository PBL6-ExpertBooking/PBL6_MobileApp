import React, { useState } from 'react'
import { styles, textStyles } from './style.module'
import { Avatar, IconButton } from 'react-native-paper'
import { Text, TouchableOpacity, View } from 'react-native'
import { Status } from '../../../../../components/StatusChip'
import { currencyUtils, datetimeHelper, nameUltils } from '../../../../../utils'
import { defaultAvatar } from '../../../../../../assets'
import { useTranslation } from 'react-i18next'
import JobDetailModal from './JobDetailModal'

export default function JobItem({ item, deleteJobCallback }) {
  const [modalVisibility, setModalVisibility] = useState(false)

  const { user, major, price, title, status, time_payment, time_booking } = item

  const showModal = () => setModalVisibility(true)
  const hideModal = () => setModalVisibility(false)

  const { t } = useTranslation()

  return user ? (
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
          <View style={{ alignSelf: 'flex-end', paddingRight: 30 }}>
            <Status.Chip status={status} />
          </View>
        </View>
        <View style={styles.btnGroup}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: 'gray', fontSize: 12 }}>
              {t(time_payment ? 'paymentAt' : 'bookedAt')}
            </Text>
            <Text style={{ fontSize: 13 }}>
              {datetimeHelper.convertISOToNormalDate(
                time_payment ? time_payment : time_booking,
              )}
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
        deleteJobCallback={deleteJobCallback}
      />
    </View>
  ) : (
    <></>
  )
}
