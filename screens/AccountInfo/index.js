import React, { useContext } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style.module'
import { AuthContext } from '../../contexts'

import UserProfile from './components/UserProfile'
import UserExpertProfile from './components/UserExpertProfile'
import UserAvatar from './components/UserAvatar'

export default function AccountInfo() {
  const { user } = useContext(AuthContext)

  return (
    <View style={{ height: '100%', backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <UserAvatar photo_url={user.photo_url} />
        <UserProfile />
        {user.role === 'EXPERT' && <UserExpertProfile />}
      </ScrollView>
      {user.role === 'USER' && (
        <View style={styles.expertRegister}>
          <Text>You are not an Expert...</Text>
          <TouchableOpacity
          // onPress={() => setUser((user) => ({ ...user, role: 'EXPERT' }))}
          >
            <Text style={{ color: '#1254FF', textDecorationLine: 'underline' }}>
              Be Expert !!!
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}
