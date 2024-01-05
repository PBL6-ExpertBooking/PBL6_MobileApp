import React, { useState } from 'react'
import { ActivityIndicator, Button, Modal, Portal } from 'react-native-paper'
import { modalStyles as styles, modalTextStyle as textStyles } from './style.module'
import { Text, View } from 'react-native'
import { currencyUtils, nameUltils, popupUtils } from '../../../../../utils'
import { expertService } from '../../../../../services'
import { useTranslation } from 'react-i18next'

export default function JobDetailModal({
  visible,
  hideModal,
  data,
  acceptJobCallback,
}) {
  const [loading, setLoading] = useState(false)
  const { _id, user, descriptions, price, address, title } = data

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
              <Text style={[textStyles.infoField, textStyles.addressText]}>{`${
                address.city?.name || ''
              }, ${address.district?.name || ''}, ${
                address.ward?.name || ''
              }`}</Text>
            )}
          </View>
          {loading && (
            <ActivityIndicator
              style={{ alignSelf: 'center', marginTop: 10 }}
              animating
              size="large"
            />
          )}
          {!loading && (
            <View style={styles.btnContainer}>
              <Button
                mode="contained-tonal"
                buttonColor="#5cb85c"
                textColor="white"
                style={{ flex: 1 }}
                onPress={() =>
                  popupUtils.confirm.popupConfirm({
                    title: t('confirmation'),
                    message: t('acceptThisJob'),
                    callback: async () => {
                      setLoading(true)
                      popupUtils.hidePopup()
                      try {
                        await expertService.acceptJob({ id: _id })
                        popupUtils.success.popupMessage({
                          message: t('acceptJobRequestSuccess'),
                        })
                      } catch (err) {
                        popupUtils.error.popupMessage({
                          message: t('acceptJobRequestFail'),
                        })
                      } finally {
                        setLoading(false)
                        hideModal()
                        acceptJobCallback()
                      }
                    },
                    cancelCallback: () => {
                      popupUtils.hidePopup()
                    },
                  })
                }
              >
                <Text style={[textStyles.buttonText]}>{t('accept')}</Text>
              </Button>
              <Button mode="outlined" style={{ flex: 1 }} onPress={hideModal}>
                <Text style={[textStyles.buttonText]}>{t('back')}</Text>
              </Button>
            </View>
          )}
        </View>
      </Modal>
    </Portal>
  )
}
