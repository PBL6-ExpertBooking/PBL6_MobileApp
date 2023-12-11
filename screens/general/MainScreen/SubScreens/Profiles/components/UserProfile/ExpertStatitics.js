import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { styles, textStyles } from './style.module'
import { useTranslation } from 'react-i18next'
import { StarRatingDisplay } from 'react-native-star-rating-widget'
import { expertService } from '../../../../../../../services'
import { datetimeHelper } from '../../../../../../../utils'

export default function ExpertStatitics({ expertInfo }) {
  const [nReview, setNReview] = useState(0)

  const { average_rating } = expertInfo

  const { t } = useTranslation()

  useEffect(() => {
    if (expertInfo?._id) {
      const getNReview = async () => {
        const data = await expertService.getExpertReviews({
          id: expertInfo._id,
          limit: 1,
        })
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
          <View style={styles.statiticsItem}>
            <Text style={[textStyles.statiticsNumber]}>{nReview}</Text>
            <Text>{t('reviews')}</Text>
          </View>
          <View style={styles.statiticsItem}>
            <Text style={[textStyles.statiticsNumber]}>
              {datetimeHelper.daysDiffToNow(expertInfo.createdAt)}
            </Text>
            <Text style={[textStyles.itemText]}>{t('expDays')}</Text>
          </View>
        </View>
      </View>
    )
  )
}
