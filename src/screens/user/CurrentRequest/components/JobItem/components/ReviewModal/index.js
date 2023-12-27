import React from 'react'
import { View, Text, Keyboard } from 'react-native'
import {
  ActivityIndicator,
  Avatar,
  Button,
  Modal,
  TextInput,
} from 'react-native-paper'
import { styles, textStyles } from './style.module'
import { useState, useRef, useEffect } from 'react'
import StarRating from 'react-native-star-rating-widget'
import { userService } from '../../../../../../../services'
import { useTranslation } from 'react-i18next'
import { nameUltils } from '../../../../../../../utils'

export default function ReviewModal({ jobId, visible, hideModal, expertInfo }) {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const [loading, setLoading] = useState(false)

  const { t } = useTranslation()

  const textInputRef = useRef(null)

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      if (textInputRef.current) {
        textInputRef.current.blur()
      }
    })

    return () => {
      keyboardDidHideListener.remove()
    }
  }, [])

  return (
    <Modal
      visible={visible}
      onDismiss={hideModal}
      contentContainerStyle={styles.modalContentContainer}
    >
      <View styles={styles.modalContainer}>
        <View style={[styles.modalTitle]}>
          <Text style={[textStyles.title]}>{t('rateExpert')}</Text>
        </View>
        <View style={styles.avatarContainer}>
          <Avatar.Image source={{ uri: expertInfo.user.photo_url }} size={100} />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            {nameUltils.getNameString(expertInfo.user)}
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.starRatingContainer}>
            <StarRating
              maxStars={5}
              rating={rating}
              onChange={(rating) => setRating(rating)}
              color="gold"
            />
            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{rating}</Text>
          </View>
          <View style={styles.commentContainer}>
            <TextInput
              ref={textInputRef}
              mode="outlined"
              style={{ width: '100%', backgroundColor: 'white' }}
              label={t('review')}
              value={comment}
              onChangeText={(comment) => setComment(comment)}
              multiline
            />
          </View>
        </View>
        {!loading && (
          <View style={styles.buttonContainer}>
            <Button
              buttonColor="#2e63c9"
              textColor="white"
              style={{ flex: 1 }}
              onPress={async () => {
                setLoading(true)
                await userService.postExpertReview({
                  job_request_id: jobId,
                  rating,
                  comment,
                })
                setLoading(false)
                hideModal()
              }}
            >
              {t('post')}
            </Button>
            <Button mode="outlined" style={{ flex: 1 }} onPress={hideModal}>
              {t('cancel')}
            </Button>
          </View>
        )}
        {loading && <ActivityIndicator size="large" animating={true} />}
      </View>
    </Modal>
  )
}
