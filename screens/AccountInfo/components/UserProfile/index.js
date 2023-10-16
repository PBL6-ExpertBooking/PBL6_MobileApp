import React, { useContext, useState } from 'react'
import { styles } from './style.module'
import { View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { AuthContext } from '../../../../contexts'
import { Dropdown } from 'react-native-element-dropdown'
import { GENDER } from '../../../../constants'

export default function UserProfile() {
  const { user } = useContext(AuthContext)

  const [isEdit, setEdit] = useState(false)
  const [userInfo, setUserInfo] = useState(user)

  return (
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
        <Dropdown
          style={[styles.dropdown]}
          selectedTextStyle={styles.selectedTextStyle}
          data={GENDER}
          placeholder="Gender"
          maxHeight={300}
          labelField="label"
          valueField="value"
          onChange={(item) => {
            setUserInfo((userInfo) => ({ ...userInfo, gender: item.value }))
          }}
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
      <View style={styles.textInputContainer}>
        <TextInput
          mode="outlined"
          label="phone"
          value={userInfo.phone}
          editable={isEdit}
          style={{ width: '100%' }}
          dense
          onChangeText={(text) =>
            setUserInfo((userInfo) => ({ ...userInfo, phone: text }))
          }
        />
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          mode="outlined"
          label="Address"
          value={userInfo.address}
          editable={isEdit}
          style={{ width: '100%' }}
          dense
          onChangeText={(text) =>
            setUserInfo((userInfo) => ({ ...userInfo, address: text }))
          }
        />
      </View>
      <View style={styles.buttonContainer}>
        {isEdit ? (
          <View style={{ flexDirection: 'row', alignSelf: 'flex-end', gap: 10 }}>
            <Button icon="pencil" mode="outlined">
              Save
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
            Edit
          </Button>
        )}
      </View>
    </View>
  )
}
