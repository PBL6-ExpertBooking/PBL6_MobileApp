import React, { useContext, useEffect, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { styles } from './style.module'
import { Avatar, Button } from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker'
import { userService } from '../../../../../services'
import { AuthContext } from '../../../../../contexts'
import { useTranslation } from 'react-i18next'
import { popupUtils } from '../../../../../utils'

export default function UserAvatar({ photo_url }) {
  const { user, setUser } = useContext(AuthContext)
  const [tempPhoto, setTempPhoto] = useState(null)

  const { t } = useTranslation()

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
    popupUtils.confirm.popupConfirm({
      title: t('confirmation'),
      message: t('changeProfile'),
      callback: async () => {
        try {
          const data = await userService.updateUserAvatar(tempPhoto, user)
          setUser((user) => ({ ...user, photo_url: data.user.photo_url }))
        } finally {
          setTempPhoto(null)
          popupUtils.hidePopup()
        }
      },
      cancelCallback: () => {
        setTempPhoto(null)
        popupUtils.hidePopup()
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
          buttonColor="#F0F8FF"
          style={{ borderWidth: 1, borderColor: 'black' }}
          onPress={() => {
            imagePick()
          }}
        >
          {t('uploadPhoto')}
        </Button>
      </TouchableOpacity>
    </View>
  )
}
