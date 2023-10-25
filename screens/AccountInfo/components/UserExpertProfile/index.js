import React, { useContext } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import { styles, textStyles } from './style.module'
import { AuthContext } from '../../../../contexts'
import { IconButton, TextInput } from 'react-native-paper'
import StarRating from 'react-native-star-rating-widget'
import * as RootNavigate from '../../../../navigation/root'
import { SCREEN } from '../../../../constants'

export default function UserExpertProfile() {
  const { expertInfo } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <Text style={textStyles.title}>Expert Profile</Text>
      <View style={styles.profileContainer}>
        <View style={{ ...styles.textInputContainer, alignItems: 'center' }}>
          <TextInput
            mode="outlined"
            label="Major"
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
          onPress={() =>
            RootNavigate.navigate(SCREEN.CERTIFICATE, {
              owner: true,
              certList: expertInfo?.certificates,
            })
          }
        >
          <IconButton icon="medal-outline" />
          <Text style={textStyles.certificate}>
            {expertInfo?.certificates.length} certificates
          </Text>
          <IconButton icon="chevron-right" style={{ marginLeft: 'auto' }} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
