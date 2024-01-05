import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles, textStyles } from './style.module'
import { ActivityIndicator, IconButton, TextInput } from 'react-native-paper'
import { useTranslation } from 'react-i18next'
import { popupUtils } from '../../../utils'

export default function CardInputForm({ isNew, data, onSubmit, onCancel }) {
  const [number, setNumber] = useState(isNew ? '' : data.number)
  const [ownerName, setOwnerName] = useState(isNew ? '' : data.owner_name)
  const [bankName, setBankName] = useState(isNew ? '' : data.bank_name)
  const [loading, setLoading] = useState(false)

  const { t } = useTranslation()

  const validate = () => {
    if (!number) {
      popupUtils.error.popupMessage({ message: t('cardNumberEmpty') })
      return false
    }
    if (!ownerName) {
      popupUtils.error.popupMessage({ message: t('ownerNameEmpty') })
      return false
    }
    if (!bankName) {
      popupUtils.error.popupMessage({ message: t('bankNameEmpty') })
      return false
    }
    return true
  }

  return (
    <View style={styles.formContainer}>
      <TextInput
        mode="outlined"
        value={number}
        label={t('cardNumber')}
        style={styles.input}
        onChangeText={(text) => setNumber(text)}
        left={<TextInput.Icon icon="credit-card-outline" />}
        dense
      />
      <TextInput
        mode="outlined"
        value={ownerName}
        label={t('ownerName')}
        style={styles.input}
        onChangeText={(text) => setOwnerName(text)}
        left={<TextInput.Icon icon="account-outline" />}
        dense
      />
      <TextInput
        mode="outlined"
        value={bankName}
        label={t('bankName')}
        style={styles.input}
        onChangeText={(text) => setBankName(text)}
        left={<TextInput.Icon icon="bank" />}
        dense
      />
      {loading && (
        <ActivityIndicator
          style={{ marginTop: 20, alignSelf: 'center' }}
          animating
          size="large"
        />
      )}
      {!loading && (
        <View style={styles.formActionContainer}>
          <TouchableOpacity
            style={[styles.button, styles.doneButton]}
            onPress={async () => {
              setLoading(true)
              if (validate()) await onSubmit({ number, ownerName, bankName })
              setLoading(false)
            }}
          >
            <View style={styles.iconContainer}>
              <IconButton
                icon="check-bold"
                style={{
                  width: 20,
                  height: 20,
                }}
                size={20}
                iconColor="white"
              />
            </View>
            <Text style={[textStyles.buttonText]}>{t('done')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={() => {
              onCancel()
            }}
          >
            <View style={styles.iconContainer}>
              <IconButton
                icon="close-thick"
                style={{
                  width: 20,
                  height: 20,
                }}
                size={20}
                iconColor="white"
              />
            </View>
            <Text style={[textStyles.buttonText]}>{t('cancel')}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}
