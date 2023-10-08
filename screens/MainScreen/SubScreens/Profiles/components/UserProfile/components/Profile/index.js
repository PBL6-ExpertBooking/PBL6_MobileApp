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
      <TouchableOpacity
        style={styles.avatarContainer}
        onPress={() => navigation.navigate(PROFILE_SCREEN.ACCOUNT_INFO)}
      >
        <Avatar.Image source={defaultAvatar} size={50} />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          {user.first_name + ' ' + user.last_name}
        </Text>
        <IconButton icon="chevron-right" style={{ marginLeft: 'auto' }} />
      </TouchableOpacity>
      <View style={styles.expertOption}>
        <View style={styles.expertOptionColumn}>
          <TouchableOpacity style={styles.expertOptionItem}>
            <IconButton icon="human-male-board-poll" size={40} />
            <Text style={{ fontSize: 18, fontWeight: 600 }}>Job List</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.expertOptionItem}>
            <IconButton icon="history" size={40} />
            <Text style={{ fontSize: 18, fontWeight: 600 }}>History</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.expertOptionColumn}>
          <TouchableOpacity style={styles.expertOptionItem}>
            <IconButton icon="party-popper" size={40} />
            <Text style={{ fontSize: 18, fontWeight: 600 }}>Job Request</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.expertOptionItem}>
            <IconButton icon="chart-bar" size={40} />
            <Text style={{ fontSize: 18, fontWeight: 600 }}>Statitics</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Divider style={{ width: '100%' }} bold />
      <View style={styles.optionGroup}>
        <TouchableOpacity style={styles.optionItem}>
          <IconButton icon="cog" />
          <Text style={{ fontSize: 18, fontWeight: 600 }}>Setting</Text>
        </TouchableOpacity>
        <Divider bold />
        <TouchableOpacity style={styles.optionItem}>
          <IconButton icon="book-account-outline" />
          <Text style={{ fontSize: 18, fontWeight: 600 }}>Term & Condition</Text>
        </TouchableOpacity>
      </View>
      <Divider style={{ width: '100%' }} bold />
      <TouchableOpacity
        style={styles.signout}
        onPress={() => RootNavigate.navigate(SCREEN.HOME)}
      >
        <Button icon="logout">
          <Text style={{ fontSize: 18, fontWeight: 600 }}>Sign out</Text>
        </Button>
      </TouchableOpacity>
    </ScrollView>
  )
}
