import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import { styles } from './style.module'

export default function ChangePassword() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput mode="outlined" label="Old Password" dense />
        <TextInput mode="outlined" label="New Password" dense />
        <TextInput mode="outlined" label="Confirm Password" dense />
      </View>
      <TouchableOpacity>
        <Text>Change</Text>
      </TouchableOpacity>
    </View>
  )
}
