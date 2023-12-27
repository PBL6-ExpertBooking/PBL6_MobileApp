import React, { useState } from 'react'
import { Keyboard, Text, TouchableOpacity, View } from 'react-native'
import { ActivityIndicator, TextInput } from 'react-native-paper'
import { styles } from './style.module'
import { useTranslation } from 'react-i18next'
import { popupUtils } from '../../../utils'
import { authService } from '../../../services'
import { useNavigation } from '@react-navigation/native'

export default function Recovery() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')

  const [loading, setLoading] = useState(false)

  const { t } = useTranslation()
  const navigation = useNavigation()

  const validate = () => {
    if (!username) {
      popupUtils.error.popupMessage({ message: t('usernameRequired') })
      return false
    }
    if (!email) {
      popupUtils.error.popupMessage({ message: t('emailRequired') })
      return false
    }
    return true
  }

  const handleChangePassword = async () => {
    Keyboard.dismiss()
    if (validate()) {
      try {
        setLoading(true)
        await authService.recoverPassword({ username, email })
        popupUtils.success.popupMessage({
          title: t('recoverPasswordSuccess'),
          message: t('recoverPasswordSuccessMesage'),
        })
        navigation.goBack()
      } catch (err) {
        popupUtils.error.popupMessage({
          title: t('changePasswordFail'),
          message: t(err.response.data.message),
        })
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.formGroup}>
        <TextInput
          mode="outlined"
          label={t('username')}
          value={username}
          style={styles.input}
          onChangeText={(text) => setUsername(text)}
          dense
        />
        <TextInput
          mode="outlined"
          value={email}
          label="Email"
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          dense
        />
      </View>
      {loading && (
        <ActivityIndicator size="large" animating={true} style={{ marginTop: 10 }} />
      )}
      {!loading && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
            <Text style={{ fontSize: 20, fontWeight: 800 }}>{t('recover')}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}
