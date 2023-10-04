import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './style.module'

export default function HistoryItem({ history }) {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={{ fontSize: 18, fontWeight: 600 }}>{history.expert.name}</Text>
        <Text>{history.price}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text>{history.date}</Text>
      </View>
    </View>
  )
}
