import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Modal, Portal } from 'react-native-paper'
import { styles } from './style.module'

import defaultAvatar from '../../../../../../assets/default-avatar.jpg'

export default function ExpertCardItem({ info }) {
  const [modalVisible, setModalVisible] = useState(false)

  const showModal = () => setModalVisible(true)
  const hideModal = () => setModalVisible(false)

  return (
    <View style={styles.container}>
      <View style={styles.leftAlign}>
        <Image source={defaultAvatar} style={styles.avatar} />
        <Text>{info.first_name + ' ' + info.last_name}</Text>
      </View>
      <TouchableOpacity onPress={showModal}>
        <Text>View Info &gt;&gt;</Text>
      </TouchableOpacity>
      <Portal>
        <Modal
          visible={modalVisible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modalContainer}
        >
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.modalContent}>
              <View style={{ alignItems: 'center' }}>
                <Image source={defaultAvatar} />
                <Text>{info.first_name + ' ' + info.last_name}</Text>
              </View>
              <View style={styles.descriptions}>
                <Text style={{ textAlign: 'center' }}>{info.descriptions}</Text>
              </View>
            </View>
          </ScrollView>
        </Modal>
      </Portal>
    </View>
  )
}
