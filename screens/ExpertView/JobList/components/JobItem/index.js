import React, { useState } from 'react'
import { styles, textStyles } from './style.module'
import { DataTable, IconButton, Modal, Portal } from 'react-native-paper'
import { Text, TouchableOpacity, View, TextInput } from 'react-native'

export default function JobItem({ item }) {
  const [modalVisibility, setModalVisibility] = useState(false)

  const { user, major, descriptions, budget, address, title } = item

  const showModal = () => setModalVisibility(true)
  const hideModal = () => setModalVisibility(false)

  return (
    <>
      <DataTable.Row>
        <DataTable.Cell>{major.name}</DataTable.Cell>
        <DataTable.Cell>{title || 'No Title'}</DataTable.Cell>
        <DataTable.Cell>
          {budget && isNaN(budget) ? `${budget.min} - ${budget.max}` : budget}
        </DataTable.Cell>
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
            {budget && (
              <View style={styles.jobInfoField}>
                <Text style={textStyles.infoField}>Budget:</Text>
                <Text style={textStyles.infoField}>
                  {isNaN(budget) ? `${budget.min} - ${budget.max}` : budget}
                </Text>
              </View>
            )}
            {user && (
              <View style={styles.jobInfoField}>
                <Text style={textStyles.infoField}>Requester:</Text>
                <Text style={textStyles.infoField}>
                  {user.first_name + ' ' + user.last_name}
                </Text>
              </View>
            )}
            <View style={styles.jobInfoField}>
              <Text style={textStyles.infoField}>Address:</Text>
              <Text style={textStyles.infoField}>{address}</Text>
            </View>
          </View>
        </Modal>
      </Portal>
    </>
  )
}
