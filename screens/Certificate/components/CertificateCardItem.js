import React, { useState } from 'react'
import { Card, Text as PaperText } from 'react-native-paper'

import { holderCert } from '../../../assets'
import { styles } from './style.module'
import ZoomableImageModal from '../../../components/ZoomableImageModal/ZoomableImageModal'
import { Text, TouchableOpacity } from 'react-native'

export default function CertificateCardItem({ item }) {
  const [modalVisibility, setModalVisibility] = useState(false)
  const { major, title, photoURL, description } = item

  const showModal = () => setModalVisibility(true)
  const hideModal = () => setModalVisibility(false)

  return (
    <Card mode="outlined" style={styles.container}>
      <Card.Cover source={holderCert} onMagicTap={showModal} />
      <Card.Content>
        <PaperText variant="titleLarge">{title}</PaperText>
        <PaperText variant="titleLarge">Major: {major}</PaperText>
        <PaperText variant="bodyMedium">{description}</PaperText>
        <TouchableOpacity style={styles.button} onPress={showModal}>
          <Text>View Certificate</Text>
        </TouchableOpacity>
      </Card.Content>
      <ZoomableImageModal
        image={photoURL}
        visible={modalVisibility}
        onDismiss={hideModal}
        contentContainerStyle={styles.modalContainer}
        style={styles.modal}
      />
    </Card>
  )
}
