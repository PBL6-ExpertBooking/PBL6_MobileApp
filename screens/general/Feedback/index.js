import React, { useEffect, useRef, useState } from 'react'
import {
  Image,
  Keyboard,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { ActivityIndicator, IconButton, TextInput } from 'react-native-paper'
import { styles, textStyles } from './style.module'
import { useTranslation } from 'react-i18next'
import * as ImagePicker from 'expo-image-picker'
import { reportService } from '../../../services'
import { popupUtils } from '../../../utils'
import { useNavigation } from '@react-navigation/native'

export default function Feedback() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [photo, setPhoto] = useState(null)
  const [loading, setLoading] = useState(false)

  const navigation = useNavigation()

  const { t } = useTranslation()

  const descriptionRef = useRef(null)

  const imagePick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    })
    if (result.canceled) return
    setPhoto(result.assets[0])
  }

  const reportPost = async () => {
    try {
      setLoading(true)
      await reportService.post({
        title,
        description,
        photo: photo?.uri,
      })
      popupUtils.success.popupMessage({ message: t('reportSuccess') })
      navigation.goBack()
    } catch (err) {
      popupUtils.error.popupMessage({ message: err.response.message })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const keyboardHideListener = Keyboard.addListener('keyboardDidHide', () => {
      descriptionRef.current.blur()
    })

    return () => {
      keyboardHideListener.remove()
    }
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContentContainer}
        style={styles.scrollContainer}
      >
        <View style={styles.inputContainer}>
          <TextInput
            mode="outlined"
            label={t('title')}
            style={styles.textInput}
            value={title}
            onChangeText={setTitle}
            dense
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            mode="outlined"
            label={t('description')}
            multiline
            style={styles.textInput}
            value={description}
            onChangeText={setDescription}
            ref={descriptionRef}
            dense
          />
        </View>
        <TouchableOpacity
          style={[styles.imageContainer, photo ? { height: 200 } : { padding: 20 }]}
          onPress={imagePick}
        >
          {!photo && (
            <View style={styles.imagePlaceholder}>
              <View
                style={[styles.iconContainer, { borderWidth: 2, borderRadius: 100 }]}
              >
                <IconButton icon="tray-arrow-up" size={30} style={styles.icon} />
              </View>
              <Text style={[textStyles.upload]}>{t('uploadPhoto')}</Text>
            </View>
          )}
          {photo && <Image source={{ uri: photo.uri }} style={styles.image} />}
        </TouchableOpacity>
        {loading && (
          <ActivityIndicator
            animating
            size="large"
            style={styles.activityIndicator}
          />
        )}
        {!loading && (
          <TouchableOpacity style={styles.buttonContainer} onPress={reportPost}>
            <View style={styles.iconContainer}>
              <IconButton
                icon="note-check-outline"
                style={styles.icon}
                iconColor="white"
              />
            </View>
            <Text style={[textStyles.button]}>{t('feedback')}</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  )
}
