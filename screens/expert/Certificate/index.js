import React, { useState, useCallback, useContext } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { IconButton } from 'react-native-paper'
import { styles } from './style.module'
import CertificateCardItem from './components/CertificateCardItem'
import ZoomableImageModal from '../../../components/ZoomableImageModal/ZoomableImageModal'
import UploadCertificateModal from './components/UploadCertificateModal'
import { AuthContext } from '../../../contexts'

export default function Certificate() {
  const { expertInfo } = useContext(AuthContext)

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [certViewModalVisibility, setCertViewModalVisibility] = useState(false)
  const [uploadModalVisibility, setUploadModalVisibility] = useState(false)

  const showCertViewModal = () => setCertViewModalVisibility(true)
  const hideCertViewModal = () => setCertViewModalVisibility(false)

  const showUploadModal = useCallback(() => setUploadModalVisibility(true), [])
  const hideUploadModal = useCallback(() => setUploadModalVisibility(false), [])

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.certListView}
        style={styles.certListStyle}
      >
        {expertInfo?.certificates.map((item, index) => (
          <CertificateCardItem
            key={index}
            item={item}
            showModal={showCertViewModal}
            setSelectedIndex={() => setSelectedIndex(index)}
          />
        ))}
        <TouchableOpacity
          style={styles.addCertBtn}
          onPress={() => {
            showUploadModal()
          }}
        >
          <IconButton
            icon="plus-circle-outline"
            size={35}
            style={{ width: 35, height: 35 }}
          />
          <Text style={{ fontSize: 17 }}>Upload Certificate</Text>
        </TouchableOpacity>
      </ScrollView>
      <ZoomableImageModal
        images={expertInfo?.certificates.map((item) => ({
          url: item.photo_url,
        }))}
        visible={certViewModalVisibility}
        index={selectedIndex}
        onDismiss={hideCertViewModal}
        onCancel={hideCertViewModal}
        contentContainerStyle={styles.modalContainer}
        style={styles.modal}
      />
      <UploadCertificateModal
        visible={uploadModalVisibility}
        hideModal={hideUploadModal}
      />
    </View>
  )
}
