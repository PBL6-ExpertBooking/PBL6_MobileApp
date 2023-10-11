import React, { useState } from 'react'
import { styles, textStyles } from './style.module'
import { DataTable, IconButton, Modal, Portal, TextInput } from 'react-native-paper'
import { MajorMap } from '../../../../../utils/Majors'
import { Text, TouchableOpacity, View } from 'react-native'

export default function JobItem({ item }) {
  const [modalVisibility, setModalVisibility] = useState(false)

  const { job, user, paymentMethod, price } = item
  const majorDetails = MajorMap.get(job.major)

  const showModal = () => setModalVisibility(true)
  const hideModal = () => setModalVisibility(false)

  return (
    <>
      <DataTable.Row>
        <DataTable.Cell>{job.major}</DataTable.Cell>
        <DataTable.Cell>{job.title}</DataTable.Cell>
        <DataTable.Cell>{price}</DataTable.Cell>
        <DataTable.Cell>
          <TouchableOpacity style={styles.detailNavigator} onPress={showModal}>
            <IconButton icon="magnify" />
          </TouchableOpacity>
        </DataTable.Cell>
      </DataTable.Row>
      <Portal>
        <Modal
          visible={modalVisibility}
          onDismiss={hideModal}
          contentContainerStyle={styles.modalContentContainer}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalTitle}>
              <IconButton icon={majorDetails.icon} />
              <Text style={{ fontSize: 15, fontWeight: 600 }}>
                {majorDetails.fullName}
              </Text>
            </View>
            <View style={styles.jobTitle}>
              <Text style={{ fontSize: 20, fontWeight: 600 }}>{job.title}</Text>
            </View>
            <TextInput
              mode="outlined"
              label="description"
              value={job.description}
              editable={false}
              style={styles.jobDescription}
              multiline
            />
          </View>
          <View style={{ gap: 10 }}>
            <View style={styles.jobInfoField}>
              <Text style={textStyles.infoField}>Payment Method:</Text>
              <Text style={textStyles.infoField}>{paymentMethod}</Text>
            </View>
            <View style={styles.jobInfoField}>
              <Text style={textStyles.infoField}>Price:</Text>
              <Text style={textStyles.infoField}>{price}</Text>
            </View>
            <View style={styles.jobInfoField}>
              <Text style={textStyles.infoField}>Requester:</Text>
              <Text style={textStyles.infoField}>
                {user.first_name + ' ' + user.last_name}
              </Text>
            </View>
          </View>
        </Modal>
      </Portal>
    </>
  )
}
