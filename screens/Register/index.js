import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style.module'
import { SCREEN } from '../../constants'

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <View style={styles.bottom}>
        <Text>Don&apos;t have account yet?</Text>
        <TouchableOpacity onPress={() => navigation.navigate(SCREEN.LOGIN)}>
          <Text style={styles.loginLink}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
