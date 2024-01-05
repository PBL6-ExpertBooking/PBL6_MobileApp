import React from 'react'
import { styles } from './style.module'
import { IconButton } from 'react-native-paper'

export default function GenderIcon({ value, style }) {
  return value ? (
    <IconButton
      icon="gender-female"
      size={20}
      iconColor="pink"
      style={{ ...styles.icon, ...style }}
    />
  ) : (
    <IconButton
      icon="gender-male"
      size={20}
      iconColor="blue"
      style={{ ...styles.icon, ...style }}
    />
  )
}
