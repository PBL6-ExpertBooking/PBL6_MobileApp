import React, { useContext, useState } from 'react'
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native'
import { TextInput, ActivityIndicator } from 'react-native-paper'
import { styles } from './style.module'
import { Link } from '@react-navigation/native'
import { SCREEN } from '../../../constants'
import { authService } from '../../../services'
import { AuthContext } from '../../../contexts'
import { storeUtils, tokenUtils, datetimeHelper } from '../../../utils'
import { googleIcon } from '../../../assets'

export default function Login({ navigation }) {
  const { setUser } = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    try {
      setLoading(true)
      const { user, tokens } = await authService.loginUser({ username, password })
      setUser({ ...user, DoB: datetimeHelper.ISODateStringToDateString(user.DoB) })
      storeUtils.saveTokens(tokens)
      tokenUtils.setAxiosAccessToken(tokens.access_token)
      navigation.navigate(SCREEN.DASHBOARD)
    } catch {
      Alert.alert('Sign in failed', 'Wrong user information!')
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
        Sign in
      </Text>
      <View style={styles.formGroup}>
        <TextInput
          mode="outlined"
          label="username"
          value={username}
          style={styles.input}
          onChangeText={(text) => setUsername(text)}
          left={<TextInput.Icon icon="account-outline" />}
        />
        <TextInput
          mode="outlined"
          value={password}
          label="password"
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
        Recovery password
      </Link>
      {loading ? (
        <ActivityIndicator size="large" animating={true} style={{ marginTop: 10 }} />
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
            <Text style={{ fontSize: 20, fontWeight: 800 }}>Login</Text>
          </TouchableOpacity>
          <Text>Or</Text>
          <TouchableOpacity style={styles.googleBtn} onPress={null}>
            <Image source={googleIcon} style={{ width: 30, height: 30 }} />
            <Text style={{ fontSize: 15, fontWeight: 600 }}>
              Sign In with Google
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.bottom}>
        <Text>Don&apos;t have account yet?</Text>
        <TouchableOpacity onPress={() => navigation.navigate(SCREEN.REGISTER)}>
          <Text style={styles.registerLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}