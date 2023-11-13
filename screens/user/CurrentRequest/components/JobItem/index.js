import React, { useState } from 'react'
import { styles, textStyles } from './style.module'
import { Button, IconButton, Modal, Portal } from 'react-native-paper'
import { Text, TouchableOpacity, View, TextInput } from 'react-native'
import { Status } from '../../../../../components/StatusChip'
import { STATUS } from '../../../../../constants'
import { jobService } from '../../../../../services'

export default function JobItem({ item }) {
  const [modalVisibility, setModalVisibility] = useState(false)

  const { _id, user, major, descriptions, price, address, title, status } = item

  const showModal = () => setModalVisibility(true)
  const hideModal = () => setModalVisibility(false)

  return (
    <View
      style={[
        styles.container,
        { shadowColor: Status.colorMap.get(status).textColor },
      ]}
    >
      <View style={styles.textContainer}>
        <Text style={[textStyles.title]}>{title}</Text>
        <Text style={[textStyles.major]}>{major.name}</Text>
        <Text style={[textStyles.price]}>{price}</Text>
      </View>
      <View style={{ marginLeft: 'auto' }}>
        <Status.Chip status={status} />
      </View>
      <TouchableOpacity
        style={{ marginLeft: 50, height: '100%' }}
        onPress={showModal}
      >
        <IconButton icon="chevron-right" style={styles.navBtn} />
      </TouchableOpacity>
      <Portal>
        <Modal
          visible={modalVisibility}
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
              <Text style={textStyles.infoField}>Budget:</Text>
              <Text style={textStyles.infoField}>{price}</Text>
            </View>
            <View style={styles.jobInfoField}>
              <Text style={textStyles.infoField}>Requester:</Text>
              <Text style={textStyles.infoField}>
                {user.first_name + ' ' + user.last_name}
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
            <View style={styles.jobInfoField}>
              <Text style={textStyles.infoField}>Status:</Text>
              <Status.Chip status={status} />
            </View>
            {status === STATUS.PROCESSING && (
              <View style={styles.buttonContainer}>
                <Button
                  icon="check"
                  buttonColor="#2e63c9"
                  textColor="white"
                  style={{ flex: 1 }}
                  onPress={async () => {
                    await jobService.markComplete({ id: _id })
                    hideModal()
                  }}
                >
                  Complete
                </Button>
                <Button mode="outlined" style={{ flex: 1 }} onPress={hideModal}>
                  Back
                </Button>
              </View>
            )}
          </View>
        </Modal>
      </Portal>
    </View>
  )
}
