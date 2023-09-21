import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style.module'
import { SCREEN } from '../../../../../../constants'
import { useNavigation } from '@react-navigation/native'

export default function AuthRedirect() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 800 }}>
        You are not signed in yet
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(SCREEN.LOGIN)}
      >
        <Text style={{ fontSize: 20, fontWeight: 500 }}>To Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(SCREEN.REGISTER)}
      >
        <Text style={{ fontSize: 20, fontWeight: 500 }}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  )
}
