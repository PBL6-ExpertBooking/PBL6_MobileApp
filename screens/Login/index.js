import React, { useContext, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './style.module'
import { Link } from '@react-navigation/native'
import { SCREEN } from '../../constants'
import { loginUser } from '../../services/login'
import { AuthContext } from '../../contexts'

export default function Login({ navigation }) {
  const authContext = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {
      const user = await loginUser({ username, password })
      authContext.setUser(user)
    } catch {
      return null
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
      <Text>Welcome back!</Text>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          value={username}
          placeholder="username"
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          value={password}
          placeholder="password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
      <Link to={{ screen: SCREEN.REGISTER }}>Recovery password</Link>
      <View style={styles.bottom}>
        <Text>Don&apos;t have account yet?</Text>
        <TouchableOpacity onPress={() => navigation.navigate(SCREEN.REGISTER)}>
          <Text style={styles.registerLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
