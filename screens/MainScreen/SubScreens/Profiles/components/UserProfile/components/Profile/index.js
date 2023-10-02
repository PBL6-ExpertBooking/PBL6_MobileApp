import React, { useContext } from 'react'
import * as RootNavigate from '../../../../../../../../navigation/root'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Avatar, Button, Divider, IconButton } from 'react-native-paper'
import { styles } from './style.module'
import { AuthContext } from '../../../../../../../../contexts'
import { PROFILE_SCREEN, SCREEN } from '../../../../../../../../constants'

import defaultAvatar from '../../../../../../../../assets/default-avatar.jpg'

export default function Profile({ navigation }) {
  const { user } = useContext(AuthContext)

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Avatar.Image source={defaultAvatar} size={200} />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 600,
        }}
      >
        {user.first_name + ' ' + user.last_name}
      </Text>
      <View style={styles.optionGroup}>
        <TouchableOpacity
          style={styles.optionItem}
          onPress={() => navigation.navigate(PROFILE_SCREEN.ACCOUNT_INFO)}
        >
          <IconButton icon="account" />
          <Text style={{ fontSize: 18, fontWeight: 600 }}>Profile</Text>
        </TouchableOpacity>
        <Divider bold />
        <TouchableOpacity
          style={styles.optionItem}
          onPress={() => navigation.navigate(PROFILE_SCREEN.CHANGE_PWD)}
        >
          <IconButton icon="lock-reset" />
          <Text style={{ fontSize: 18, fontWeight: 600 }}>Change Password</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.signout}
        onPress={() => RootNavigate.navigate(SCREEN.HOME)}
      >
        <Button icon="logout">Sign out</Button>
      </TouchableOpacity>
    </ScrollView>
  )
}
