import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { styles } from './style.module'
import { CertificateCardItem, ZoomableImageModal } from '../../../components'

export default function Certificate({ route }) {
  const { certificates } = route.params

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [certViewModalVisibility, setCertViewModalVisibility] = useState(false)

  const showCertViewModal = () => setCertViewModalVisibility(true)
  const hideCertViewModal = () => setCertViewModalVisibility(false)

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.certListView}
        style={styles.certListStyle}
      >
        {certificates.map((item, index) => (
          <CertificateCardItem
            key={index}
            item={item}
            showModal={showCertViewModal}
            setSelectedIndex={() => setSelectedIndex(index)}
          />
        ))}
      </ScrollView>
      <ZoomableImageModal
        images={certificates.map((item) => ({
          url: item.photo_url,
        }))}
        visible={certViewModalVisibility}
        index={selectedIndex}
        onDismiss={hideCertViewModal}
        onCancel={hideCertViewModal}
        contentContainerStyle={styles.modalContainer}
        style={styles.modal}
      />
    </View>
  )
}
