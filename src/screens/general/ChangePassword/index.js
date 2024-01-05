import React, { useState } from 'react'
import { Keyboard, Text, TouchableOpacity, View } from 'react-native'
import { ActivityIndicator, TextInput } from 'react-native-paper'
import { styles } from './style.module'
import { useTranslation } from 'react-i18next'
import { popupUtils } from '../../../utils'
import { userService } from '../../../services'
import { useNavigation } from '@react-navigation/native'

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPwd, setConfirmPwd] = useState('')

  const [loading, setLoading] = useState(false)

  const { t } = useTranslation()
  const navigation = useNavigation()

  const validate = () => {
    if (!currentPassword) {
      popupUtils.error.popupMessage({ message: t('passwordRequirements') })
      return false
    }
    if (!newPassword) {
      popupUtils.error.popupMessage({ message: t('newPasswordRequired') })
      return false
    }
    if (!confirmPwd) {
      popupUtils.error.popupMessage({ message: t('confirmPasswordRequired') })
      return false
    }
    if (newPassword !== confirmPwd) {
      popupUtils.error.popupMessage({ message: t('confirmPasswordIsNotMatch') })
      return false
    }
    return true
  }

  const handleChangePassword = async () => {
    Keyboard.dismiss()
    if (validate()) {
      try {
        setLoading(true)
        await userService.changePassword({
          current_password: currentPassword,
          new_password: newPassword,
          confirm_password: confirmPwd,
        })
        popupUtils.success.popupMessage({ title: t('changePasswordSuccess') })
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
          label={t('password')}
          value={currentPassword}
          style={styles.input}
          onChangeText={(text) => setCurrentPassword(text)}
          secureTextEntry
          dense
        />
        <TextInput
          mode="outlined"
          value={newPassword}
          label={t('newPassword')}
          style={styles.input}
          onChangeText={(text) => setNewPassword(text)}
          secureTextEntry
          dense
        />
        <TextInput
          mode="outlined"
          value={confirmPwd}
          label={t('confirmNewPassword')}
          style={styles.input}
          onChangeText={(text) => setConfirmPwd(text)}
          secureTextEntry
          dense
        />
      </View>
      {loading && (
        <ActivityIndicator size="large" animating={true} style={{ marginTop: 10 }} />
      )}
      {!loading && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
            <Text style={{ fontSize: 20, fontWeight: 800 }}>
              {t('changePassword')}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}
