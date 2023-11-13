import React, { useState, useEffect, useCallback } from 'react'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { Avatar, IconButton, TextInput } from 'react-native-paper'
import { Dropdown } from 'react-native-element-dropdown'
import StarRating from 'react-native-star-rating-widget'
import { styles, textStyles } from './style.module'
import { GenderIcon, ReviewModal } from '../../../components'
import { GENDER, SCREEN } from '../../../constants'
import { RootNavigate } from '../../../navigation'
import { expertService } from '../../../services'

export default function ExpertProfile({ route }) {
  const { _id, user, descriptions, average_rating, rating_count } = route.params.info

  const [certificates, setCertificates] = useState([])
  const [reviewModalVisibility, setReviewModalVisibility] = useState(false)

  const showReviewModal = useCallback(() => setReviewModalVisibility(true), [])
  const hideReviewModal = useCallback(() => setReviewModalVisibility(false), [])

  useEffect(() => {
    const getCertificates = async () => {
      const data = await expertService.getCertificatesByExpertId(_id)
      setCertificates(data)
    }
    getCertificates()
  }, [_id])

  return (
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
              label="first name"
              value={user.first_name}
              editable={false}
              style={{ flex: 1, ...styles.textInput }}
              dense
            />
            <TextInput
              mode="outlined"
              label="last name"
              value={user.last_name}
              editable={false}
              style={{ flex: 1, ...styles.textInput }}
              dense
            />
          </View>
          <View style={styles.textInputContainer}>
            <Dropdown
              style={[styles.dropdown]}
              value={user.gender}
              data={GENDER}
              placeholder="Gender"
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
          <Text style={[textStyles.title]}>Expert Profile</Text>
          <View style={styles.expertProfile}>
            <View style={{ ...styles.textInputContainer, alignItems: 'center' }}>
              <TextInput
                mode="outlined"
                label="Major"
                value={descriptions}
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
                  <Text>{average_rating} stars/</Text>
                  <TouchableOpacity onPress={showReviewModal}>
                    <Text style={{ color: '#1890ff' }}>{rating_count} reviews</Text>
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
                {certificates.length} certificates
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
