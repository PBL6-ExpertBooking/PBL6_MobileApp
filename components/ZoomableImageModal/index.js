import React from 'react'
import { Modal, Portal } from 'react-native-paper'
import ImageViewer from 'react-native-image-zoom-viewer'

export default function ZoomableImageModal({
  images,
  index,
  contentContainerStyle,
  style,
  visible,
  onDismiss,
  onCancel,
}) {
  return (
    <Portal>
      <Modal
        contentContainerStyle={contentContainerStyle}
        style={style}
        visible={visible}
        onDismiss={onDismiss}
      >
        <ImageViewer
          enablePreload
          enableSwipeDown
          onCancel={onCancel}
          imageUrls={images}
          style={{ width: '100%', height: '100%' }}
          index={index}
        />
      </Modal>
    </Portal>
  )
}
