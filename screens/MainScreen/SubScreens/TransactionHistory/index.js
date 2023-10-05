import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from './style.module'
import HistoryItem from './components/HistoryItem'
import { Searchbar, SegmentedButtons } from 'react-native-paper'
import { segmentedButtons } from './buttons'

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
  const [selectedStatus, setSelectedStatus] = useState('All')
  const [selectedTransferMode, setSelectedTransferMode] = useState('All')

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
      <View style={styles.filterContainer}>
        <Searchbar placeholder="Search" style={styles.searchBar} />
      </View>
      <View style={styles.buttonContainer}>
        <SegmentedButtons
          value={selectedStatus}
          onValueChange={setSelectedStatus}
          buttons={segmentedButtons.status}
          density="medium"
          style={styles.segmentedButtons}
        />
        <SegmentedButtons
          value={selectedTransferMode}
          onValueChange={setSelectedTransferMode}
          buttons={segmentedButtons.transaction}
          density="medium"
          style={styles.segmentedButtons}
        />
      </View>
      <View style={styles.historyContainer}>
        {histories.map((item, index) => (
          <HistoryItem key={index} history={item} />
        ))}
      </View>
    </View>
  )
}
