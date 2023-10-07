import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style.module'

import defaultAvatar from '../../../../../../assets/default-avatar.jpg'
import { SCREEN } from '../../../../../../constants'
import { useNavigation } from '@react-navigation/native'

export default function ExpertCardItem({ info }) {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.leftAlign}>
        <Image source={defaultAvatar} style={styles.avatar} />
        <Text>{info.first_name + ' ' + info.last_name}</Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(SCREEN.EXPERT_PROFILE, { expertInfo: info })
        }
      >
        <Text>View Info &gt;&gt;</Text>
      </TouchableOpacity>
    </View>
  )
}
