import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles, textStyles } from './style.module'
import { useTranslation } from 'react-i18next'
import { StarRatingDisplay } from 'react-native-star-rating-widget'
import { expertService } from '../../../../../../../services'
import { datetimeHelper } from '../../../../../../../utils'
import { ReviewModal } from '../../../../../../../components'

export default function ExpertStatitics({ expertInfo }) {
  const [nReview, setNReview] = useState(0)
  const [reviews, setReviews] = useState(null)
  const [reviewModalVisibility, setReviewModalVisibility] = useState(false)

  const showReviewModal = () => setReviewModalVisibility(true)
  const hideReviewModal = () => setReviewModalVisibility(false)

  const { average_rating } = expertInfo

  const { t } = useTranslation()

  useEffect(() => {
    if (expertInfo?._id) {
      const getNReview = async () => {
        const data = await expertService.getExpertReviews({
          id: expertInfo._id,
          limit: 10,
        })
        setReviews(data.pagination.reviews)
        setNReview(data.pagination.totalDocs)
      }
      getNReview()
    }
  }, [expertInfo?._id])

  return (
    expertInfo && (
      <View style={styles.optionContainer}>
        <Text style={[textStyles.optionGroupTitle]}>{t('expertStatitics')}</Text>
        <View style={styles.option}>
          <View style={styles.statiticsItem}>
            <Text style={[textStyles.statiticsNumber]}>
              {Math.round(average_rating * 10) / 10}
            </Text>
            <StarRatingDisplay
              rating={average_rating}
              maxStars={5}
              starSize={15}
              starStyle={{ width: 5 }}
            />
          </View>
          <TouchableOpacity style={styles.statiticsItem} onPress={showReviewModal}>
            <Text style={[textStyles.statiticsNumber]}>{nReview}</Text>
            <Text>{t('reviews')}</Text>
          </TouchableOpacity>
          <View style={styles.statiticsItem}>
            <Text style={[textStyles.statiticsNumber]}>
              {datetimeHelper.daysDiffToNow(expertInfo.createdAt)}
            </Text>
            <Text style={[textStyles.itemText]}>{t('expDays')}</Text>
          </View>
        </View>
        {reviews && (
          <ReviewModal
            reviews={reviews}
            visible={reviewModalVisibility}
            hideModal={hideReviewModal}
          />
        )}
      </View>
    )
  )
}
