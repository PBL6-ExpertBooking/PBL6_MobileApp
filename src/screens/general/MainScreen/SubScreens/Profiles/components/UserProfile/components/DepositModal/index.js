import React, { useContext, useState } from 'react'
import {
  ActivityIndicator,
  Button,
  Modal,
  Portal,
  TextInput,
} from 'react-native-paper'
import { styles } from './style.module'
import { Text, View } from 'react-native'
import { transactionService } from '../../../../../../../../../services'
import * as WebBrowser from 'expo-web-browser'
import * as Linking from 'expo-linking'
import { AuthContext } from '../../../../../../../../../contexts'
import { useTranslation } from 'react-i18next'
import { popupUtils } from '../../../../../../../../../utils'

export default function DepositModal({ visible, hideModal }) {
  const [depositValue, setDepositValue] = useState('')
  const [loading, setLoading] = useState(false)

  const { reloadUserInfo } = useContext(AuthContext)

  const { t } = useTranslation()

  const validate = () => {
    if (!depositValue) {
      popupUtils.error.popupMessage({ message: t('noDepositValue') })
      return false
    }
    if (depositValue % 10000 != 0) {
      popupUtils.error.popupMessage({ message: t('depositValueNotFormated') })
      return false
    }
    if (depositValue < 50000 || depositValue > 5000000) {
      popupUtils.error.popupMessage({ message: t('depostiValueOutOfRange') })
      return false
    }
    if (isNaN(depositValue)) {
      popupUtils.error.popupMessage({ message: t('depositValueIncludedLetter') })
      return false
    }
    return true
  }

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.modalContentContainer}
      >
        {loading && (
          <ActivityIndicator
            style={{ alignSelf: 'center' }}
            animating
            size="large"
          />
        )}
        {!loading && (
          <View style={styles.container}>
            <View style={styles.title}>
              <Text style={{ fontSize: 17, fontWeight: 700 }}>
                {t('depositTitle')}
              </Text>
              <Text>{t('depositMessage')}</Text>
            </View>
            <View style={{ width: '70%', alignSelf: 'center' }}>
              <TextInput
                mode="outlined"
                value={depositValue}
                keyboardType="number-pad"
                onChangeText={(value) => setDepositValue(value)}
                textAlign="center"
                style={styles.input}
                dense
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                icon="check"
                buttonColor="#2e63c9"
                textColor="white"
                style={{ flex: 1 }}
                onPress={async () => {
                  if (validate()) {
                    setLoading(true)
                    const { paymentUrl } = await transactionService.getDeposit(
                      parseInt(depositValue),
                    )
                    await WebBrowser.openAuthSessionAsync(
                      paymentUrl,
                      Linking.createURL('Expert-Hiring', {
                        scheme: 'Expert-Hiring',
                      }),
                    )
                    setDepositValue('')
                    hideModal()
                    setLoading(false)
                    reloadUserInfo()
                  }
                }}
              >
                {t('deposit')}
              </Button>
              <Button mode="outlined" style={{ flex: 1 }} onPress={hideModal}>
                {t('back')}
              </Button>
            </View>
          </View>
        )}
      </Modal>
    </Portal>
  )
}
