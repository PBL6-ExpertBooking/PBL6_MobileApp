import React from 'react'
import { ScrollView, Text } from 'react-native'
import { View } from 'react-native'
import { styles } from './style.module'
import { Avatar } from 'react-native-paper'

export default function ExpertProfile({ route }) {
  const { user, certificates, descriptions, average_rating, rating_count } =
    route.params.info

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileInfo}>
        <View style={{ alignItems: 'center' }}>
          <Avatar.Image source={{ uri: user.photo_url }} size={200} />
          <Text style={{ fontSize: 18, fontWeight: 600 }}>
            {user.first_name + ' ' + user.last_name}
          </Text>
        </View>
        <View style={styles.descriptions}>
          <Text style={{ textAlign: 'center' }}>{descriptions}</Text>
        </View>
      </View>
    </ScrollView>
  )
}
