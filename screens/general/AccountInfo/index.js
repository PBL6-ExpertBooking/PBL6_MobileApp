import React, { useContext } from 'react'
import { View } from 'react-native'
import { styles } from './style.module'
import { AuthContext } from '../../../contexts'
import Swiper from 'react-native-swiper'

import UserProfile from './components/UserProfile'
import UserExpertProfile from './components/UserExpertProfile'
import UserAvatar from './components/UserAvatar'

export default function AccountInfo() {
  const { user } = useContext(AuthContext)

  return (
    <View style={{ height: '100%', backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <UserAvatar photo_url={user.photo_url} />
        <Swiper
          style={styles.wrapper}
          index={0}
          showsPagination={false}
          loop={false}
        >
          <UserProfile />
          {user.role === 'EXPERT' && <UserExpertProfile />}
        </Swiper>
      </View>
    </View>
  )
}
