import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Modal, Portal } from 'react-native-paper'
import { styles } from './style.module'
import { expertService } from '../../services'
import ReviewItem from './ReviewItem'

export default function ReviewModal({ expertId, visible, hideModal }) {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const getReviews = async () => {
      const response = await expertService.getExpertReviews({
        id: expertId,
        page: 1,
        limit: 5,
      })
      setReviews(response.pagination.reviews)
    }
    getReviews()
  }, [])

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
