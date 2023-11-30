import React, { useState } from 'react'
import { styles, textStyles } from './style.module'
import { Button, DataTable, IconButton, Modal, Portal } from 'react-native-paper'
import { Text, TouchableOpacity, View, TextInput } from 'react-native'
import { jobService } from '../../../../../services'
import { Status } from '../../../../../components/StatusChip'
import { currencyUtils, nameUltils } from '../../../../../utils'

export default function JobItem({ item }) {
  const [modalVisibility, setModalVisibility] = useState(false)

  const { _id, user, major, descriptions, price, address, title, status } = item

  const showModal = () => setModalVisibility(true)
  const hideModal = () => setModalVisibility(false)

  return (
    <DataTable.Row>
      <DataTable.Cell>{major.name}</DataTable.Cell>
      <DataTable.Cell>{title || 'No Title'}</DataTable.Cell>
      <DataTable.Cell>{price}</DataTable.Cell>
      <DataTable.Cell>
        <TouchableOpacity style={styles.detailNavigator} onPress={showModal}>
          <IconButton icon="magnify" />
        </TouchableOpacity>
      </DataTable.Cell>
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
            <View style={styles.jobInfoField}>
              <Text style={textStyles.infoField}>Status:</Text>
              <Status.Chip status={status} />
            </View>
            <View style={styles.btnContainer}>
              <Button
                mode="contained-tonal"
                buttonColor="red"
                textColor="white"
                style={{ flex: 1, padding: 0 }}
                onPress={async () => {
                  await jobService.cancelJob({ id: _id })
                  hideModal()
                }}
              >
                Cancel
              </Button>
              <Button
                mode="outlined"
                style={{ flex: 1, padding: 0 }}
                onPress={hideModal}
              >
                Back
              </Button>
            </View>
          </View>
        </Modal>
      </Portal>
    </DataTable.Row>
  )
}
