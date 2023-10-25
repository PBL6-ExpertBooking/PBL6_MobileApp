import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { IconButton } from 'react-native-paper'
import { styles } from './style.module'

import CertificateCardItem from './components/CertificateCardItem'
import ZoomableImageModal from '../../components/ZoomableImageModal/ZoomableImageModal'

export default function Certificate({ route }) {
  const [certList] = useState(route.params.certList)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [modalVisibility, setModalVisibility] = useState(false)

  const showModal = () => setModalVisibility(true)
  const hideModal = () => setModalVisibility(false)

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.certListView}
        style={styles.certListStyle}
      >
        {certList.map((item, index) => (
          <CertificateCardItem
            key={index}
            item={item}
            showModal={showModal}
            setSelectedIndex={() => setSelectedIndex(index)}
          />
        ))}
        <TouchableOpacity style={styles.addCertBtn}>
          <IconButton
            icon="plus-circle-outline"
            size={35}
            style={{ width: 35, height: 35 }}
          />
          <Text style={{ fontSize: 17 }}>Upload Certificate</Text>
        </TouchableOpacity>
      </ScrollView>
      <ZoomableImageModal
        images={certList.map((item) => ({
          url: item.photo_url,
        }))}
        visible={modalVisibility}
        index={selectedIndex}
        onDismiss={hideModal}
        onCancel={hideModal}
        contentContainerStyle={styles.modalContainer}
        style={styles.modal}
      />
    </View>
  )
}
