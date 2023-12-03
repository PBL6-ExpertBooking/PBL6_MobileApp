import React, { useState, useEffect, useCallback, useContext } from 'react'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { ActivityIndicator, Avatar, IconButton, TextInput } from 'react-native-paper'
import { Dropdown } from 'react-native-element-dropdown'
import StarRating from 'react-native-star-rating-widget'
import { styles, textStyles } from './style.module'
import { GenderIcon, ReviewModal } from '../../../components'
import { GENDER, SCREEN } from '../../../constants'
import { RootNavigate } from '../../../navigation'
import { expertService } from '../../../services'
import { AppContext } from '../../../contexts'
import { useTranslation } from 'react-i18next'

export default function ExpertProfile({ route }) {
  const { majors } = useContext(AppContext)
  const { refetchData, info } = route.params
  const { _id } = info

  const [certificates, setCertificates] = useState([])
  const [reviewModalVisibility, setReviewModalVisibility] = useState(false)
  const [expertInfo, setExpertInfo] = useState(info)
  const [loading, setLoading] = useState(true)

  const showReviewModal = useCallback(() => setReviewModalVisibility(true), [])
  const hideReviewModal = useCallback(() => setReviewModalVisibility(false), [])

  const { user, verified_majors, average_rating, rating_count } = expertInfo

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
      getCertificates()
    }
  }, [_id])

  return loading ? (
    <ActivityIndicator style={{ flex: 1 }} animating size="large" />
  ) : (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profileInfo}>
          <View style={{ alignItems: 'center' }}>
            <Avatar.Image source={{ uri: user.photo_url }} size={200} />
          </View>
        </View>
        <View style={styles.userInfoContainer}>
          <View style={styles.textInputContainer}>
            <TextInput
              mode="outlined"
              label={t('lastName')}
              value={user.last_name}
              editable={false}
              style={{ flex: 1, ...styles.textInput }}
              dense
            />
            <TextInput
              mode="outlined"
              label={t('firstName')}
              value={user.first_name}
              editable={false}
              style={{ flex: 1, ...styles.textInput }}
              dense
            />
          </View>
          <View style={styles.textInputContainer}>
            <Dropdown
              style={[styles.dropdown]}
              value={user.gender}
              data={GENDER.map((item) => ({ ...item, label: t(item.label) }))}
              placeholder={t('gender')}
              maxHeight={300}
              labelField="label"
              valueField="value"
              disable
              renderLeftIcon={() => (
                <GenderIcon
                  value={user.gender}
                  style={{ width: 20, marginLeft: 0, marginRight: 10 }}
                />
              )}
              renderRightIcon={() => <></>}
            />
          </View>
        </View>
        <View style={styles.expertInfoContainer}>
          <Text style={[textStyles.title]}>{t('expertProfile')}</Text>
          <View style={styles.expertProfile}>
            <View style={{ ...styles.textInputContainer, alignItems: 'center' }}>
              <TextInput
                mode="outlined"
                label={t('major')}
                value={
                  verified_majors?.length > 0
                    ? majors.find((item) => item._id === verified_majors[0]).name
                    : ''
                }
                editable={false}
                style={{ flex: 1 }}
                dense
              />
              <View style={{ alignItems: 'center' }}>
                <StarRating
                  rating={average_rating}
                  maxStars={5}
                  starSize={25}
                  starStyle={{ width: 20 }}
                  color="red"
                  onChange={() => {}}
                  animationConfig={{ scale: 1 }}
                />
                <View style={styles.ratingContainer}>
                  <Text>{Math.round(average_rating * 10) / 10}/</Text>
                  <TouchableOpacity onPress={showReviewModal}>
                    <Text style={{ color: '#1890ff' }}>
                      {rating_count} {t('reviews')}
                    </Text>
                  </TouchableOpacity>
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
        expertId={_id}
      />
    </View>
  )
}
