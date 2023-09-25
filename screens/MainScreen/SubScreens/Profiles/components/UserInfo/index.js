import React, { useContext } from 'react'
import { View } from 'react-native'
import { Avatar, TextInput } from 'react-native-paper'
import { styles } from './style.module'
import { AuthContext } from '../../../../../../contexts'

import defaultAvatar from '../../../../../../assets/default-avatar.jpg'

export default function UserInfo() {
  const { user } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <View>
        <Avatar.Image source={defaultAvatar} />
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            mode="outlined"
            label="first name"
            value={user.first_name}
            editable={false}
            style={{ flex: 1 }}
            dense
          />
          <TextInput
            mode="outlined"
            label="last name"
            value={user.last_name}
            editable={false}
            style={{ flex: 1 }}
            dense
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            mode="outlined"
            label="username"
            value={user.username}
            editable={false}
            style={{ width: '100%' }}
            dense
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            mode="outlined"
            label="email"
            value={user.email}
            editable={false}
            style={{ width: '100%' }}
            dense
          />
        </View>
      </View>
    </View>
  )
}
