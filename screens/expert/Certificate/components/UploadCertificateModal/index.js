import React, { memo, useContext, useState } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Button, IconButton, Modal, Portal, TextInput } from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker'
import { styles, textStyles } from './style.module'
import { Dropdown } from 'react-native-element-dropdown'
import { AuthContext, AppContext } from '../../../../../contexts'
import { Popup } from 'react-native-popup-confirm-toast'
import { expertService } from '../../../../../services'
import { useTranslation } from 'react-i18next'

function UploadCertificateModal({ visible, hideModal }) {
  const { majors } = useContext(AppContext)
  const { getExpertInfo } = useContext(AuthContext)
  const [title, setTitle] = useState('')
  const [selectedMajor, setSelectedMajor] = useState({})
  const [descriptions, setDescriptions] = useState('')
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const { t } = useTranslation()

  const imagePick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    })
    if (result.canceled) return
    setSelectedPhoto(result.assets[0].uri)
  }

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        style={styles.modalStyle}
        contentContainerStyle={styles.container}
      >
        <View style={styles.title}>
          <Text style={[textStyles.title]}>{t('uploadCertificate')}</Text>
        </View>
        <TouchableOpacity
          style={styles.certificateUpload}
          onPress={() => imagePick()}
        >
          {selectedPhoto ? (
            <Image source={{ uri: selectedPhoto }} style={styles.previewImage} />
          ) : (
            <View style={styles.uploadContainer}>
              <IconButton
                icon="tray-arrow-up"
                style={{ borderColor: 'black', borderWidth: 1 }}
              />
              <Text style={[textStyles.upload]}>{t('uploadCertificate')}</Text>
            </View>
          )}
        </TouchableOpacity>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              mode="outlined"
              label={t('title')}
              value={title}
              onChangeText={(text) => setTitle(text)}
              style={styles.input}
              dense
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              mode="outlined"
              label={t('description')}
              value={descriptions}
              onChangeText={(text) => setDescriptions(text)}
              style={styles.input}
              dense
            />
          </View>
          <View style={[styles.inputContainer, { marginTop: 5 }]}>
            <Dropdown
              style={[styles.dropdown]}
              selectedTextStyle={styles.selectedTextStyle}
              data={majors}
              placeholder={t('major')}
              maxHeight={300}
              labelField="name"
              valueField="_id"
              value={selectedMajor.value}
              onChange={(item) => {
                setSelectedMajor(item)
              }}
              dense
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { borderWidth: 0 }]}
            onPress={hideModal}
          >
            <Button
              icon="cancel"
              buttonColor="red"
              textColor="white"
              style={styles.button}
            >
              {t('cancel')}
            </Button>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { borderWidth: 0 }]}
            onPress={() =>
              Popup.show({
                type: 'confirm',
                title: 'Confirmation!!!',
                textBody: 'Assure your change in profile!',
                buttonText: 'Confirm',
                okButtonStyle: { backgroundColor: 'blue' },
                callback: async () => {
                  await expertService.uploadCertificate({
                    name: title,
                    descriptions,
                    major_id: selectedMajor._id,
                    photo: selectedPhoto,
                  })
                  Popup.hide()
                  getExpertInfo()
                  hideModal()
                },
                cancelCallback: () => {
                  Popup.hide()
                },
              })
            }
          >
            <Button
              icon="check"
              buttonColor="aquamarine"
              textColor="black"
              style={styles.button}
            >
              {t('post')}
            </Button>
          </TouchableOpacity>
        </View>
      </Modal>
    </Portal>
  )
}

export default memo(UploadCertificateModal)
