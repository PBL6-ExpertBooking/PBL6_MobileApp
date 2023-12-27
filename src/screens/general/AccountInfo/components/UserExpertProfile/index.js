import React, { useContext } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import { styles, textStyles } from './style.module'
import { AuthContext } from '../../../../../contexts'
import { IconButton, TextInput } from 'react-native-paper'
import StarRating from 'react-native-star-rating-widget'
import { RootNavigate } from '../../../../../navigation'
import { SCREEN } from '../../../../../constants'
import { useTranslation } from 'react-i18next'

export default function UserExpertProfile() {
  const { expertInfo } = useContext(AuthContext)

  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <Text style={textStyles.title}>{t('expertProfile')}</Text>
      <View style={styles.profileContainer}>
        <View style={{ ...styles.textInputContainer, alignItems: 'center' }}>
          <TextInput
            mode="outlined"
            label={t('major')}
            value={expertInfo?.descriptions}
            editable={false}
            style={{ flex: 1 }}
            dense
          />
          <StarRating
            rating={expertInfo?.average_rating}
            maxStars={5}
            starSize={30}
            starStyle={{ width: 20 }}
            color="red"
            onChange={() => {}}
            animationConfig={{ scale: 1 }}
          />
        </View>
        <TouchableOpacity
          style={styles.certificateContainer}
          onPress={() => RootNavigate.navigate(SCREEN.CERTIFICATE)}
        >
          <IconButton icon="medal-outline" />
          <Text style={textStyles.certificate}>
            {expertInfo?.certificates.length} {t('certificate')}
          </Text>
          <IconButton icon="chevron-right" style={{ marginLeft: 'auto' }} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
