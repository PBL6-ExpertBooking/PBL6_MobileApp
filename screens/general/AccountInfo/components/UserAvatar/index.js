import React, { useContext, useEffect, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { styles } from './style.module'
import { Avatar, Button } from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker'
import { Popup } from 'react-native-popup-confirm-toast'
import { userService } from '../../../../../services'
import { AuthContext } from '../../../../../contexts'

export default function UserAvatar({ photo_url }) {
  const { setUser } = useContext(AuthContext)
  const [tempPhoto, setTempPhoto] = useState(null)

  const imagePick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    })
    if (result.canceled) return
    setTempPhoto(result.assets[0].uri)
  }

  useEffect(() => {
    if (!tempPhoto) return
    Popup.show({
      type: 'confirm',
      title: 'Confirmation!!!',
      textBody: 'Assure your change in profile!',
      buttonText: 'Confirm',
      okButtonStyle: { backgroundColor: 'blue' },
      callback: async () => {
        try {
          const data = await userService.updateUserAvatar(tempPhoto)
          setUser((user) => ({ ...user, photo_url: data.user.photo_url }))
        } finally {
          setTempPhoto(null)
          Popup.hide()
        }
      },
      cancelCallback: () => {
        setTempPhoto(null)
        Popup.hide()
      },
    })
  }, [tempPhoto])

  return (
    <View style={styles.avatarContainer}>
      <Avatar.Image source={{ uri: tempPhoto || photo_url }} size={200} />
      <TouchableOpacity>
        <Button
          icon="upload"
          mode="contained-tonal"
          onPress={() => {
            imagePick()
          }}
        >
          Upload
        </Button>
      </TouchableOpacity>
    </View>
  )
}
