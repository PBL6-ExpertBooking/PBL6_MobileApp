import React from 'react'
import { ScrollView, View } from 'react-native'
import { styles } from './style.module'
import ExpertCardItem from './components/ExpertCardItem'

export default function SearchResult({ experts }) {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.dataContentContainer}
        style={styles.dataContainer}
      >
        {experts.map((expert) => (
          <ExpertCardItem key={expert._id} info={expert} />
        ))}
      </ScrollView>
    </View>
  )
}
