import React from 'react'
import { Card, Text as PaperText } from 'react-native-paper'
import { styles } from './style.module'
import { Text, TouchableOpacity } from 'react-native'

export default function CertificateCardItem({ item, showModal, setSelectedIndex }) {
  const { major, name, photo_url, descriptions } = item

  return (
    <Card mode="outlined" style={styles.container}>
      <Card.Cover source={{ uri: photo_url }} />
      <Card.Content>
        <PaperText variant="titleLarge">{name}</PaperText>
        <PaperText variant="titleLarge">Major: {major.name}</PaperText>
        <PaperText variant="bodyMedium">{descriptions}</PaperText>
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
