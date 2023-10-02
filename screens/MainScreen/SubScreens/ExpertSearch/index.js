import React, { useState } from 'react'
import { ScrollView, Text } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { styles } from './style.module'

export default function ExpertSearch() {
  const [searchQuery, setSearchQuery] = useState('')

  const queryChange = (query) => setSearchQuery(query)

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text
        style={{
          alignSelf: 'flex-start',
          marginLeft: '5%',
          marginBottom: 10,
          fontSize: 20,
          fontWeight: 600,
        }}
      >
        Find an Expert
      </Text>
      <Searchbar
        placeholder="Search"
        value={searchQuery}
        style={styles.searchBar}
        onChangeText={queryChange}
      />
    </ScrollView>
  )
}
