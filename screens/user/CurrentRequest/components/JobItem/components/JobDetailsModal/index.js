import React, { useState } from 'react'
import { styles, textStyles } from './style.module'
import { ActivityIndicator, Avatar, Modal, TextInput } from 'react-native-paper'
import { View, Text, TouchableOpacity } from 'react-native'
import { Status } from '../../../../../../../components/StatusChip'
import { SCREEN } from '../../../../../../../constants'
import { RootNavigate } from '../../../../../../../navigation'
import ButtonContainer from './ButtonContainer'
import { currencyUtils, nameUltils } from '../../../../../../../utils'
import { useTranslation } from 'react-i18next'

export default function JobDetailsModal({
  data,
  visible,
  hideModal,
  expertInfo,
  executeStatusChange,
}) {
  const { user, descriptions, price, address, title, status, time_payment } = data

  const [loading, setLoading] = useState(false)

  const { t } = useTranslation()

  return (
    <Modal
      visible={visible}
      onDismiss={hideModal}
      contentContainerStyle={styles.modalContentContainer}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalTitle}>
          <Text style={{ fontSize: 15, fontWeight: 600 }}>
            {t('detailJobRequest')}
          </Text>
        </View>
        <View style={styles.jobTitle}>
          <Text style={{ fontSize: 20, fontWeight: 600 }}>
            {title || 'No Title'}
          </Text>
        </View>
        <TextInput
          style={styles.jobDescription}
          value={descriptions}
          editable={false}
          multiline
        />
      </View>
      <View style={{ gap: 10 }}>
        <View style={styles.jobInfoField}>
          <Text style={textStyles.infoField}>{t('paymentMethod')}:</Text>
        </View>
        <View style={styles.jobInfoField}>
          <Text style={textStyles.infoField}>{t('price')}:</Text>
          <Text style={textStyles.infoField}>
            {currencyUtils.formatCurrency(price)}
          </Text>
        </View>
        <View style={styles.jobInfoField}>
          <Text style={textStyles.infoField}>{t('from')}:</Text>
          <Text style={textStyles.infoField}>{nameUltils.getNameString(user)}</Text>
        </View>
        <View style={styles.jobInfoField}>
          <Text style={textStyles.infoField}>{t('address')}:</Text>
          {address && (
            <Text
              style={[textStyles.infoField, textStyles.addressText]}
            >{`${address.city.name}, ${address.district.name}, ${address.ward.name}`}</Text>
          )}
        </View>
        <View style={styles.jobInfoField}>
          <Text style={textStyles.infoField}>{t(status)}:</Text>
          <View style={styles.statusContainer}>
            {expertInfo && (
              <TouchableOpacity
                onPress={() => {
                  hideModal()
                  RootNavigate.navigate(SCREEN.EXPERT_PROFILE, {
                    info: expertInfo,
                  })
                }}
              >
                <Avatar.Image
                  source={{ uri: expertInfo.user.photo_url }}
                  size={30}
                />
              </TouchableOpacity>
            )}
            <Status.Chip status={status} />
          </View>
        </View>
        {!loading && (
          <ButtonContainer
            data={data}
            status={status}
            executeStatusChange={executeStatusChange}
            setLoading={setLoading}
            hideModal={hideModal}
            isPaid={!!time_payment}
            isReviewed={false}
          />
        )}
        {loading && <ActivityIndicator size="large" animating={true} />}
      </View>
    </Modal>
  )
}
