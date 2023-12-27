import React, { useState } from 'react'
import { styles, textStyles } from './style.module'
import { Portal } from 'react-native-paper'
import { Text, TouchableOpacity, View } from 'react-native'
import { Status } from '../../../../../components/StatusChip'
import JobDetailsModal from './components/JobDetailsModal'
import ReviewModal from './components/ReviewModal'
import { useEffect } from 'react'
import { expertService } from '../../../../../services'
import { STATUS } from '../../../../../constants'
import { currencyUtils } from '../../../../../utils'

export default function JobItem({ item, onItemStatusChange, reloadCallback }) {
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
    <TouchableOpacity
      style={styles.container}
      onPress={showDetailsModal}
      activeOpacity={0.7}
    >
      <View style={styles.textContainer}>
        <Text style={[textStyles.title]}>{title}</Text>
        <Text style={[textStyles.major]}>{major.name}</Text>
        <Text style={[textStyles.price]}>{currencyUtils.formatCurrency(price)}</Text>
      </View>
      <View style={styles.rightPannel}>
        <Status.Chip status={status} />
      </View>
      <Portal>
        <JobDetailsModal
          data={item}
          visible={detailsModalVisibility}
          hideModal={hideDetailsModal}
          openReviewModal={showReviewModal}
          expertInfo={expertInfo}
          executeStatusChange={onItemStatusChange}
          reloadCallback={reloadCallback}
          showReviewModal={showReviewModal}
        />
        {expertInfo && status === STATUS.DONE && (
          <ReviewModal
            jobId={_id}
            visible={reviewModalVisibility}
            hideModal={hideReviewModal}
            expertInfo={expertInfo}
          />
        )}
      </Portal>
    </TouchableOpacity>
  )
}
