import React, { useState, useContext } from 'react'
import { Keyboard, Text, TouchableOpacity, View } from 'react-native'
import { ActivityIndicator, TextInput } from 'react-native-paper'
import { styles } from './style.module'
import { SCREEN } from '../../../constants'
import { useTranslation } from 'react-i18next'
import { LanguageSwitch } from '../../../components'
import { authService } from '../../../services'
import { AuthContext } from '../../../contexts'
import { datetimeHelper, popupUtils, storeUtils, tokenUtils } from '../../../utils'

export default function Register({ navigation }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(false)
  const [loading, setLoading] = useState(false)

  const { setUser } = useContext(AuthContext)

  const { t } = useTranslation()

  const handleRegister = async () => {
    try {
      Keyboard.dismiss()
      setLoading(true)
      const { user, tokens } = await authService.registerUser({
        first_name: firstName,
        last_name: lastName,
        email,
        username,
        password,
      })
      setUser({
        ...user,
        DoB: datetimeHelper.ISODateStringToDateString(user.DoB),
      })
      storeUtils.saveTokens(tokens)
      tokenUtils.setAxiosAccessToken(tokens.access_token)
      navigation.navigate(SCREEN.DASHBOARD)
    } catch (err) {
      popupUtils.error.popupMessage({ message: t(err.response.data.message) })
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 70,
          fontWeight: 700,
        }}
      >
        {t('signUp')}
      </Text>
      <View style={styles.formGroup}>
        <View style={styles.nameContainer}>
          <TextInput
            mode="outlined"
            label={t('firstName')}
            value={firstName}
            style={[styles.input, { flex: 1 }]}
            onChangeText={(text) => setFirstName(text)}
          />
          <TextInput
            mode="outlined"
            label={t('lastName')}
            value={lastName}
            style={[styles.input, { flex: 1 }]}
            onChangeText={(text) => setLastName(text)}
          />
        </View>
        <TextInput
          mode="outlined"
          label="email"
          value={email}
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          mode="outlined"
          label={t('username')}
          value={username}
          style={styles.input}
          onChangeText={(text) => setUsername(text)}
          left={<TextInput.Icon icon="account-outline" />}
        />
        <TextInput
          mode="outlined"
          value={password}
          label={t('password')}
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={!passwordVisibility}
          left={<TextInput.Icon icon="lock-outline" />}
          right={
            <TextInput.Icon
              icon={passwordVisibility ? 'eye-off' : 'eye'}
              onPress={() => setPasswordVisibility(!passwordVisibility)}
            />
          }
        />
        <TextInput
          mode="outlined"
          value={confirmPassword}
          label={t('passwordConfirm')}
          style={styles.input}
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry={!confirmPasswordVisibility}
          left={<TextInput.Icon icon="lock-outline" />}
          right={
            <TextInput.Icon
              icon={confirmPasswordVisibility ? 'eye-off' : 'eye'}
              onPress={() =>
                setConfirmPasswordVisibility(!confirmPasswordVisibility)
              }
            />
          }
        />
      </View>
      {loading && (
        <ActivityIndicator style={{ width: '100%' }} animating size="large" />
      )}
      {!loading && (
        <TouchableOpacity
          style={styles.registerBtn}
          onPress={async () => {
            if (password === confirmPassword) handleRegister()
            else popupUtils.error.popupMessage({ message: t('passwordMustMatch') })
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: 800 }}>{t('register')}</Text>
        </TouchableOpacity>
      )}
      <View style={styles.bottom}>
        <Text>{t('alreadyMember')}</Text>
        <TouchableOpacity onPress={() => navigation.navigate(SCREEN.LOGIN)}>
          <Text style={styles.loginLink}>{t('signIn')}</Text>
        </TouchableOpacity>
      </View>
      <LanguageSwitch style={styles.lngSwitch} />
    </View>
  )
}
