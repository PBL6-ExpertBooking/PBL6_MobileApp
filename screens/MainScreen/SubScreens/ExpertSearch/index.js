import React, { useState } from 'react'
import { View } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { styles } from './style.module'

export default function ExpertSearch() {
  const [searchQuery, setSearchQuery] = useState('')

  const queryChange = (query) => setSearchQuery(query)

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        value={searchQuery}
        style={styles.searchBar}
        onChangeText={queryChange}
      />
    </View>
  )
}
