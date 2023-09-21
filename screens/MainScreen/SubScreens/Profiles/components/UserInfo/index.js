import React, { useContext } from 'react'
import { Image, View, Text } from 'react-native'
import { styles } from './style.module'
import { AuthContext } from '../../../../../../contexts'

import defaultAvatar from '../../../../../../assets/default-avatar.jpg'

export default function UserInfo() {
  const { user } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <Image source={defaultAvatar} />
      <Text>{user.first_name + ' ' + user.last_name}</Text>
    </View>
  )
}
