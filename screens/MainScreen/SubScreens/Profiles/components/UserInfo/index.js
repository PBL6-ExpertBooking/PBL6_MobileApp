import React, { useContext, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Avatar, Button, TextInput } from 'react-native-paper'
import { styles } from './style.module'
import { AuthContext } from '../../../../../../contexts'

import defaultAvatar from '../../../../../../assets/default-avatar.jpg'

export default function UserInfo() {
  const { user } = useContext(AuthContext)

  const [isEdit, setEdit] = useState(false)
  const [userInfo, setUserInfo] = useState(user)

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar.Image source={defaultAvatar} size={100} />
        <TouchableOpacity>
          <Button icon="camera" mode="contained-tonal">
            Change Avatar
          </Button>
        </TouchableOpacity>
      </View>
      <View style={styles.userProfileContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            mode="outlined"
            label="first name"
            value={userInfo.first_name}
            editable={isEdit}
            style={{ flex: 1 }}
            dense
            onChangeText={(text) =>
              setUserInfo((userInfo) => ({ ...userInfo, first_name: text }))
            }
          />
          <TextInput
            mode="outlined"
            label="last name"
            value={userInfo.last_name}
            editable={isEdit}
            style={{ flex: 1 }}
            dense
            onChangeText={(text) =>
              setUserInfo((userInfo) => ({ ...userInfo, last_name: text }))
            }
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            mode="outlined"
            label="username"
            value={userInfo.username}
            editable={isEdit}
            style={{ width: '100%' }}
            dense
            onChangeText={(text) =>
              setUserInfo((userInfo) => ({ ...userInfo, username: text }))
            }
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            mode="outlined"
            label="email"
            value={userInfo.email}
            editable={isEdit}
            style={{ width: '100%' }}
            dense
            onChangeText={(text) =>
              setUserInfo((userInfo) => ({ ...userInfo, email: text }))
            }
          />
        </View>
        <View style={{ width: '80%', marginTop: 10 }}>
          {isEdit ? (
            <View style={{ flexDirection: 'row', alignSelf: 'flex-end', gap: 10 }}>
              <Button icon="pencil" mode="outlined">
                Save Change
              </Button>
              <Button
                icon="cancel"
                textColor="white"
                mode="contained"
                onPress={() => setEdit(false)}
              >
                Cancel
              </Button>
            </View>
          ) : (
            <Button icon="pencil" mode="outlined" onPress={() => setEdit(true)}>
              Edit Profile
            </Button>
          )}
        </View>
      </View>
      {user.role === 'USER' ? (
        <View style={styles.expertRegister}>
          <Text>You are not an Expert...</Text>
          <TouchableOpacity>
            <Text style={{ color: '#1254FF', textDecorationLine: 'underline' }}>
              Be Expert !!!
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text>Expert profile</Text>
      )}
    </View>
  )
}
