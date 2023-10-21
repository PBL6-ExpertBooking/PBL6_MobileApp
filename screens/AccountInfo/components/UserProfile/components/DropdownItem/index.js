import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './style.module'
import GenderIcon from '../GenderIcon'

export default function DropdownItem({ item }) {
  return (
    <View style={styles.container}>
      <GenderIcon value={item.value} />
      <Text style={styles.selectedTextStyle}>{item.label}</Text>
    </View>
  )
}
