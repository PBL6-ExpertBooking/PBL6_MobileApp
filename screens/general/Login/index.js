import React, { useContext, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { TextInput, ActivityIndicator } from 'react-native-paper'
import { useTranslation } from 'react-i18next'
import { styles } from './style.module'
import { Link } from '@react-navigation/native'
import { SCREEN } from '../../../constants'
import { authService } from '../../../services'
import { AuthContext } from '../../../contexts'
import { storeUtils, tokenUtils, datetimeHelper, popupUtils } from '../../../utils'
import { googleIcon } from '../../../assets'
import { LanguageSwitch } from '../../../components'

export default function Login({ navigation }) {
  const { setUser } = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const [loading, setLoading] = useState(false)

  const { t } = useTranslation()

  const handleLogin = async () => {
    try {
      setLoading(true)
      const { user, tokens } = await authService.loginUser({ username, password })
      setUser({ ...user, DoB: datetimeHelper.ISODateStringToDateString(user.DoB) })
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
        {t('signIn')}
      </Text>
      <View style={styles.formGroup}>
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
      </View>
      <Link
        to={{ screen: SCREEN.REGISTER }}
        style={{ marginLeft: 'auto', marginRight: '10%' }}
      >
        {t('forgotPassword')}
      </Link>
      {loading ? (
        <ActivityIndicator size="large" animating={true} style={{ marginTop: 10 }} />
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
            <Text style={{ fontSize: 20, fontWeight: 800 }}>{t('login')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleBtn} onPress={null}>
            <Image source={googleIcon} style={{ width: 30, height: 30 }} />
            <Text style={{ fontSize: 15, fontWeight: 600 }}>
              {t('signInWithGoogle')}
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.bottom}>
        <Text>{t('dontHaveAccount')}</Text>
        <TouchableOpacity onPress={() => navigation.navigate(SCREEN.REGISTER)}>
          <Text style={styles.registerLink}>{t('signUp')}</Text>
        </TouchableOpacity>
      </View>
      <LanguageSwitch style={styles.lngSwitch} />
    </View>
  )
}
