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

export default function DepositModal({ visible, hideModal }) {
  const [depositValue, setDepositValue] = useState('')
  const [loading, setLoading] = useState(false)

  const { reloadUserInfo } = useContext(AuthContext)

  const { t } = useTranslation()

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
                placeholder="Deposit Value"
                textAlign="center"
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
                  setLoading(true)
                  const { paymentUrl } = await transactionService.getDeposit(
                    parseInt(depositValue),
                  )
                  await WebBrowser.openAuthSessionAsync(
                    paymentUrl,
                    Linking.createURL('Expert-Hiring', { scheme: 'Expert-Hiring' }),
                  )
                  setDepositValue('')
                  hideModal()
                  setLoading(false)
                  reloadUserInfo()
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
