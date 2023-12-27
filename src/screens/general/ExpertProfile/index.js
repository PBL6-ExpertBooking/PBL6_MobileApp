import React, { useState, useEffect, useCallback } from 'react'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { ActivityIndicator, Avatar, IconButton } from 'react-native-paper'
import { StarRatingDisplay } from 'react-native-star-rating-widget'
import { styles, textStyles } from './style.module'
import { ReviewModal } from '../../../components'
import { SCREEN } from '../../../constants'
import { RootNavigate } from '../../../navigation'
import { expertService } from '../../../services'
import { useTranslation } from 'react-i18next'
import { datetimeHelper, nameUltils } from '../../../utils'
import { defaultAvatar } from '../../../../assets'

export default function ExpertProfile({ route }) {
  const { refetchData, info } = route.params
  const { _id } = info

  const [certificates, setCertificates] = useState([])
  const [reviewModalVisibility, setReviewModalVisibility] = useState(false)
  const [expertInfo, setExpertInfo] = useState(info)
  const [reviews, setReviews] = useState([])
  const [nReview, setNReview] = useState(0)
  const [loading, setLoading] = useState(true)

  const showReviewModal = useCallback(() => setReviewModalVisibility(true), [])
  const hideReviewModal = useCallback(() => setReviewModalVisibility(false), [])

  const { user, average_rating, createdAt } = expertInfo

  const { t } = useTranslation()

  useEffect(() => {
    if (refetchData) {
      const getExpertInfo = async () => {
        const data = await expertService.getExpertById(_id)
        setExpertInfo(data.expert)
        setCertificates(data.expert.certificates)
        setLoading(false)
      }
      getExpertInfo()
    } else {
      const getCertificates = async () => {
        const data = await expertService.getCertificatesByExpertId(_id)
        setCertificates(data)
        setLoading(false)
      }
      const getReviews = async () => {
        const response = await expertService.getExpertReviews({
          id: _id,
          page: 1,
          limit: 5,
        })
        setReviews(response.pagination.reviews)
        setNReview(response.pagination.totalDocs)
      }
      getCertificates()
      getReviews()
    }
  }, [_id])

  useEffect(() => {}, [])

  return loading ? (
    <ActivityIndicator style={{ flex: 1 }} animating size="large" />
  ) : (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profileInfo}>
          <View style={{ alignItems: 'center' }}>
            <Avatar.Image
              source={user.photo_url ? { uri: user.photo_url } : defaultAvatar}
              size={200}
            />
          </View>
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={[textStyles.name]}>{nameUltils.getNameString(user)}</Text>
        </View>
        <View style={styles.expertInfoContainer}>
          <Text style={[textStyles.title]}>{t('expertProfile')}</Text>
          <View style={styles.expertProfile}>
            <View style={styles.statiticsContainer}>
              <View style={styles.statiticsContentContainer}>
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
                <TouchableOpacity
                  style={styles.statiticsItem}
                  onPress={() => showReviewModal()}
                >
                  <Text style={[textStyles.statiticsNumber, { color: '#2196F3' }]}>
                    {nReview}
                  </Text>
                  <Text style={[{ color: '#2196F3' }]}>{t('reviews')}</Text>
                </TouchableOpacity>
                <View style={styles.statiticsItem}>
                  <Text style={[textStyles.statiticsNumber]}>
                    {datetimeHelper.daysDiffToNow(createdAt)}
                  </Text>
                  <Text style={[textStyles.itemText]}>{t('expDays')}</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.certificateContainer}
              onPress={() =>
                RootNavigate.navigate(SCREEN.EXPERT_CERTIFICATE, { certificates })
              }
            >
              <IconButton icon="medal-outline" />
              <Text style={[textStyles.certificate]}>
                {certificates.length} {t('certificate')}
              </Text>
              <IconButton icon="chevron-right" style={{ marginLeft: 'auto' }} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <ReviewModal
        visible={reviewModalVisibility}
        hideModal={hideReviewModal}
        reviews={reviews}
      />
    </View>
  )
}
