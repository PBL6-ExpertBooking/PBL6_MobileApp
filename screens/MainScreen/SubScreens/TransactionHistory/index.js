import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './style.module'
import HistoryItem from './components/HistoryItem'

const histories = [
  {
    expert: {
      name: 'expert 1',
    },
    date: '3/10/2023',
    price: '200000',
  },
]

export default function TransactionHistory() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          alignSelf: 'flex-start',
          marginLeft: '5%',
          marginBottom: 10,
          fontSize: 20,
          fontWeight: 600,
        }}
      >
        Transaction History
      </Text>
      <View style={styles.historyContainer}>
        {histories.map((item, index) => (
          <HistoryItem key={index} history={item} />
        ))}
      </View>
    </View>
  )
}
