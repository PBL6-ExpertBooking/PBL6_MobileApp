import React from 'react'
import { ScrollView, Text } from 'react-native'
import { View } from 'react-native'
import { styles } from './style.module'
import { Avatar } from 'react-native-paper'

import defaultAvatar from '../../assets/default-avatar.jpg'

export default function ExpertProfile({ route }) {
  const { expertInfo } = route.params

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileInfo}>
        <View style={{ alignItems: 'center' }}>
          <Avatar.Image source={defaultAvatar} size={200} />
          <Text style={{ fontSize: 18, fontWeight: 600 }}>
            {expertInfo.first_name + ' ' + expertInfo.last_name}
          </Text>
        </View>
        <View style={styles.descriptions}>
          <Text style={{ textAlign: 'center' }}>{expertInfo.descriptions}</Text>
        </View>
      </View>
    </ScrollView>
  )
}
