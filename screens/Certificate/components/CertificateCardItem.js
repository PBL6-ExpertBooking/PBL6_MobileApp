import React from 'react'
import { Card, Text as PaperText } from 'react-native-paper'
import { styles } from './style.module'
import { Text, TouchableOpacity } from 'react-native'

export default function CertificateCardItem({ item, showModal, setSelectedIndex }) {
  const { major, title, photoURL, description } = item

  return (
    <Card mode="outlined" style={styles.container}>
      <Card.Cover source={{ uri: photoURL }} />
      <Card.Content>
        <PaperText variant="titleLarge">{title}</PaperText>
        <PaperText variant="titleLarge">Major: {major}</PaperText>
        <PaperText variant="bodyMedium">{description}</PaperText>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setSelectedIndex()
            showModal()
          }}
        >
          <Text>View Certificate</Text>
        </TouchableOpacity>
      </Card.Content>
    </Card>
  )
}
