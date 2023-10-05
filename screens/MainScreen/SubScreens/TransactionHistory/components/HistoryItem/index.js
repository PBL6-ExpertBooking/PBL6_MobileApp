import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from './style.module'
import { IconButton, Modal, Portal } from 'react-native-paper'

export default function HistoryItem({ history }) {
  const [modalVisibility, setModalVisibility] = useState(false)

  const showModal = () => setModalVisibility(true)
  const hideModal = () => setModalVisibility(false)

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={{ fontSize: 18, fontWeight: 600 }}>{history.expert.name}</Text>
        <Text>{history.price}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text>{history.date}</Text>
        <IconButton icon="arrow-right" onPress={showModal} />
      </View>
      <Portal>
        <Modal
          visible={modalVisibility}
          onDismiss={hideModal}
          contentContainerStyle={styles.modalContainer}
        >
          <View>
            <Text>Transaction Code:</Text>
            <Text>Date:</Text>
            <Text>Transferer:</Text>
            <Text>Receiver:</Text>
            <Text>Service:</Text>
            <Text>Notation:</Text>
          </View>
        </Modal>
      </Portal>
    </View>
  )
}
