import React from 'react'
import { Button, Modal, Portal, TextInput } from 'react-native-paper'
import { modalStyles as styles, textStyles } from './style.module'
import { Text, View } from 'react-native'
import { currencyUtils, nameUltils } from '../../../../../utils'
import { Popup } from 'react-native-popup-confirm-toast'
import { expertService } from '../../../../../services'

export default function JobDetailModal({ visible, hideModal, data }) {
  const { _id, user, descriptions, price, address, title } = data

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.modalContentContainer}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalTitle}>
            <Text style={{ fontSize: 15, fontWeight: 600 }}>Test</Text>
          </View>
          <View style={styles.jobTitle}>
            <Text style={{ fontSize: 20, fontWeight: 600 }}>
              {title || 'No Title'}
            </Text>
          </View>
          <TextInput
            style={styles.jobDescription}
            value={descriptions}
            editable={false}
            multiline
          />
        </View>
        <View style={{ gap: 10 }}>
          <View style={styles.jobInfoField}>
            <Text style={textStyles.infoField}>Payment Method:</Text>
          </View>
          <View style={styles.jobInfoField}>
            <Text style={textStyles.infoField}>Price:</Text>
            <Text style={textStyles.infoField}>
              {currencyUtils.formatCurrency(price)}
            </Text>
          </View>
          <View style={styles.jobInfoField}>
            <Text style={textStyles.infoField}>Requester:</Text>
            <Text style={textStyles.infoField}>
              {nameUltils.getNameString(user)}
            </Text>
          </View>
          <View style={styles.jobInfoField}>
            <Text style={textStyles.infoField}>Address:</Text>
            {address && (
              <Text
                style={[textStyles.infoField, textStyles.addressText]}
              >{`${address.city.name}, ${address.district.name}, ${address.ward.name}`}</Text>
            )}
          </View>
          <View style={styles.btnContainer}>
            <Button
              mode="contained-tonal"
              buttonColor="#5cb85c"
              textColor="white"
              style={{ flex: 1 }}
              onPress={() =>
                Popup.show({
                  type: 'confirm',
                  title: 'Confirmation!!!',
                  textBody: 'Assure your change in profile!',
                  buttonText: 'Confirm',
                  okButtonStyle: { backgroundColor: 'blue' },
                  callback: async () => {
                    await expertService.acceptJob({ id: _id })
                    Popup.hide()
                    hideModal()
                  },
                  cancelCallback: () => {
                    Popup.hide()
                  },
                })
              }
            >
              Accept
            </Button>
            <Button mode="outlined" style={{ flex: 1 }} onPress={hideModal}>
              Back
            </Button>
          </View>
        </View>
      </Modal>
    </Portal>
  )
}
