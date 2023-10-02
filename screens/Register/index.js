import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import { styles } from './style.module'
import { SCREEN } from '../../constants'

export default function Register({ navigation }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(false)

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 70,
          fontWeight: 700,
        }}
      >
        Sign Up
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
        <TextInput
          mode="outlined"
          value={confirmPassword}
          label="confirm password"
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
      <TouchableOpacity style={styles.registerBtn}>
        <Text style={{ fontSize: 20, fontWeight: 800 }}>Register</Text>
      </TouchableOpacity>
      <View style={styles.bottom}>
        <Text>Already had an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate(SCREEN.LOGIN)}>
          <Text style={styles.loginLink}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
