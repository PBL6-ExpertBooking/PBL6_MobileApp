import React, { useState } from 'react'
import { styles, textStyles } from './style.module'
import { IconButton, Portal } from 'react-native-paper'
import { Text, TouchableOpacity, View } from 'react-native'
import { Status } from '../../../../../components/StatusChip'
import JobDetailsModal from './components/JobDetailsModal'
import ReviewModal from './components/ReviewModal'
import { useEffect } from 'react'
import { expertService } from '../../../../../services'
import { STATUS } from '../../../../../constants'

export default function JobItem({ item, onItemStatusChange }) {
  const { _id, major, price, title, status, expert } = item

  const [expertInfo, setExpertInfo] = useState(null)
  const [detailsModalVisibility, setDetailsModalVisibility] = useState(false)
  const [reviewModalVisibility, setReviewModalVisibility] = useState(false)

  const showDetailsModal = () => setDetailsModalVisibility(true)
  const hideDetailsModal = () => setDetailsModalVisibility(false)

  const showReviewModal = () => setReviewModalVisibility(true)
  const hideReviewModal = () => setReviewModalVisibility(false)

  useEffect(() => {
    if (expert) {
      const getExpertInfo = async () => {
        const response = await expertService.getExpertById(expert)
        setExpertInfo(response.expert)
      }
      getExpertInfo()
    }
  }, [expert])

  return (
    <View
      style={[
        styles.container,
        { shadowColor: Status.colorMap.get(status).textColor },
      ]}
    >
      <View style={styles.textContainer}>
        <Text style={[textStyles.title]}>{title}</Text>
        <Text style={[textStyles.major]}>{major.name}</Text>
        <Text style={[textStyles.price]}>{price}</Text>
      </View>
      <View style={{ marginLeft: 'auto' }}>
        <Status.Chip status={status} />
      </View>
      <TouchableOpacity
        style={{ marginLeft: 50, height: '100%' }}
        onPress={showDetailsModal}
      >
        <IconButton icon="chevron-right" style={styles.navBtn} />
      </TouchableOpacity>
      <Portal>
        <JobDetailsModal
          data={item}
          visible={detailsModalVisibility}
          hideModal={hideDetailsModal}
          openReviewModal={showReviewModal}
          expertInfo={expertInfo}
          executeStatusChange={onItemStatusChange}
        />
        {expertInfo && status === STATUS.PROCESSING && (
          <ReviewModal
            jobId={_id}
            visible={reviewModalVisibility}
            hideModal={hideReviewModal}
            expertInfo={expertInfo}
          />
        )}
      </Portal>
    </View>
  )
}
