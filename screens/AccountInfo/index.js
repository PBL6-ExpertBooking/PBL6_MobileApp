import React, { useContext } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Avatar, Button } from 'react-native-paper'
import { styles } from './style.module'
import { AuthContext } from '../../contexts'

import defaultAvatar from '../../assets/default-avatar.jpg'
import UserProfile from './components/UserProfile'
import UserExpertProfile from './components/UserExpertProfile'

export default function AccountInfo() {
  const { user, setUser } = useContext(AuthContext)

  return (
    <ScrollView contentContainerStyle={styles.container} style={{ height: '100%' }}>
      <View style={styles.avatarContainer}>
        <Avatar.Image source={defaultAvatar} size={200} />
        <TouchableOpacity>
          <Button icon="upload" mode="contained-tonal">
            Upload
          </Button>
        </TouchableOpacity>
      </View>
      <UserProfile />
      {user.role === 'USER' ? (
        <View style={styles.expertRegister}>
          <Text>You are not an Expert...</Text>
          <TouchableOpacity
            onPress={() => setUser((user) => ({ ...user, role: 'EXPERT' }))}
          >
            <Text style={{ color: '#1254FF', textDecorationLine: 'underline' }}>
              Be Expert !!!
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <UserExpertProfile />
      )}
    </ScrollView>
  )
}
