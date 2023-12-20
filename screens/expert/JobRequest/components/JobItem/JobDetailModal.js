import React, { useState } from 'react'
import { ActivityIndicator, Button, Modal, Portal } from 'react-native-paper'
import { modalStyles as styles, modalTextStyle as textStyles } from './style.module'
import { Text, View } from 'react-native'
import { currencyUtils, nameUltils, popupUtils } from '../../../../../utils'
import { jobService } from '../../../../../services'
import { useTranslation } from 'react-i18next'
import { colors } from '../../../../../themes'
import { STATUS } from '../../../../../constants'

export default function JobDetailModal({
  visible,
  hideModal,
  data,
  deleteJobCallback,
}) {
  const [loading, setLoading] = useState(false)
  const { _id, user, descriptions, price, address, title, status } = data

  const { t } = useTranslation()

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.modalContentContainer}
      >
        <View style={styles.modalContainer}>
          <View style={styles.jobTitle}>
            <Text style={[textStyles.title]}>
              {t('title')}: {title || 'No Title'}
            </Text>
          </View>
          <View>
            <Text style={[textStyles.description]}>
              <Text style={{ fontWeight: 'bold' }}>{t('description')}</Text>:{' '}
              {descriptions}
            </Text>
          </View>
        </View>
        <View style={{ gap: 10 }}>
          <View style={styles.jobInfoField}>
            <Text style={[textStyles.infoField]}>{t('paymentMethod')}:</Text>
            <Text style={[textStyles.infoField]}>VNPay</Text>
          </View>
          <View style={styles.jobInfoField}>
            <Text style={[textStyles.infoField]}>{t('price')}:</Text>
            <Text style={[textStyles.infoField]}>
              {currencyUtils.formatCurrency(price)}
            </Text>
          </View>
          <View style={styles.jobInfoField}>
            <Text style={[textStyles.infoField]}>{t('from')}:</Text>
            <Text style={[textStyles.infoField]}>
              {nameUltils.getNameString(user)}
            </Text>
          </View>
          <View style={styles.jobInfoField}>
            <Text style={[textStyles.infoField]}>{t('address')}:</Text>
            {address && (
              <Text
                style={[textStyles.infoField, textStyles.addressText]}
              >{`${address.city.name}, ${address.district.name}, ${address.ward.name}`}</Text>
            )}
          </View>
          {status === STATUS.PROCESSING &&
            (loading ? (
              <ActivityIndicator
                style={{ alignSelf: 'center', marginTop: 10 }}
                animating
                size="large"
              />
            ) : (
              <View style={styles.btnContainer}>
                <Button
                  mode="contained-tonal"
                  buttonColor={colors.danger}
                  textColor="white"
                  style={{ flex: 1 }}
                  onPress={() =>
                    popupUtils.confirm.popupConfirm({
                      title: t('confirmation'),
                      message: t('cancelThisJob'),
                      callback: async () => {
                        setLoading(true)
                        popupUtils.hidePopup()
                        await jobService.cancelJob({ id: _id })
                        setLoading(false)
                        hideModal()
                        deleteJobCallback()
                      },
                      cancelCallback: () => {
                        popupUtils.hidePopup()
                      },
                    })
                  }
                >
                  <Text style={[textStyles.buttonText]}>{t('cancel')}</Text>
                </Button>
                <Button mode="outlined" style={{ flex: 1 }} onPress={hideModal}>
                  <Text style={[textStyles.buttonText]}>{t('back')}</Text>
                </Button>
              </View>
            ))}
        </View>
      </Modal>
    </Portal>
  )
}
