import React, { useState } from 'react'
import { Modal, Portal } from 'react-native-paper'
import ImageViewer from 'react-native-image-zoom-viewer'

export default function ZoomableImageModal({
  image,
  contentContainerStyle,
  style,
  visible,
  onDismiss,
}) {
  const [images] = useState([{ url: image }])

  return (
    <Portal>
      <Modal
        contentContainerStyle={contentContainerStyle}
        style={style}
        visible={visible}
        onDismiss={onDismiss}
      >
        <ImageViewer imageUrls={images} style={{ width: '100%', height: '100%' }} />
      </Modal>
    </Portal>
  )
}
