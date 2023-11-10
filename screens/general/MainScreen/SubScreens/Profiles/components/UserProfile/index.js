import React, { useContext } from 'react'
import { RootNavigate } from '../../../../../../../navigation'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Avatar, Button, Divider, IconButton } from 'react-native-paper'
import { styles } from './style.module'
import { AuthContext } from '../../../../../../../contexts'
import { ROLE, SCREEN } from '../../../../../../../constants'
import { TokenUtils } from '../../../../../../../utils'
import ExpertOption from './ExpertOption'
import UserOption from './UserOption'

export default function Profile() {
  const { user, setUser } = useContext(AuthContext)

  const logout = () => {
    setUser(null)
    TokenUtils.clearTokens()
    TokenUtils.setAxiosAccessToken('')
    RootNavigate.navigate(SCREEN.HOME)
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.avatarContainer}
        onPress={() => RootNavigate.navigate(SCREEN.ACCOUNT_INFO)}
      >
        <Avatar.Image source={{ uri: user.photo_url }} size={50} />
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
      {user.role === ROLE.USER && <UserOption />}
      {user.role === ROLE.EXPERT && <ExpertOption />}
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
      <TouchableOpacity style={styles.signout} onPress={logout}>
        <Button icon="logout">
          <Text style={{ fontSize: 18, fontWeight: 600 }}>Sign out</Text>
        </Button>
      </TouchableOpacity>
    </ScrollView>
  )
}