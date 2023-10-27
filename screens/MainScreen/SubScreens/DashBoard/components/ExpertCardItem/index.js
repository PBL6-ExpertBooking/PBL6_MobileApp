import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style.module'

import { SCREEN } from '../../../../../../constants'
import { useNavigation } from '@react-navigation/native'

export default function ExpertCardItem({ info }) {
  const { user } = info
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.leftAlign}>
        <Image source={{ uri: user.photo_url }} style={styles.avatar} />
        <Text>{user.first_name + ' ' + user.last_name}</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate(SCREEN.EXPERT_PROFILE, { info })}
      >
        <Text>View Info &gt;&gt;</Text>
      </TouchableOpacity>
    </View>
  )
}
