import React from 'react'
import { ScrollView, View } from 'react-native'
import { Modal, Portal } from 'react-native-paper'
import { styles } from './style.module'
import ReviewItem from './ReviewItem'

export default function ReviewModal({ reviews, visible, hideModal }) {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.modalContainer}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.reviewContainer}>
            {reviews.map((item) => (
              <ReviewItem key={item._id} data={item} />
            ))}
          </View>
        </ScrollView>
      </Modal>
    </Portal>
  )
}
