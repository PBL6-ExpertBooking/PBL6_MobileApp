import React, { useContext, useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import { styles, textStyles } from './style.module'
import { AuthContext } from '../../../../contexts'
import { Button, IconButton, TextInput } from 'react-native-paper'
import { MajorMap } from '../../../../utils/Majors'
import StarRating from 'react-native-star-rating-widget'
import * as RootNavigate from '../../../../navigation/root'
import { SCREEN } from '../../../../constants'

export default function UserExpertProfile() {
  const { user } = useContext(AuthContext)

  const [isEdit, setEdit] = useState(false)
  const [expertInfo, setExpertInfo] = useState(user.expertInfo)

  return (
    <View style={styles.container}>
      <Text style={textStyles.title}>Expert Profile</Text>
      <View style={styles.profileContainer}>
        <View style={{ ...styles.textInputContainer, alignItems: 'center' }}>
          <TextInput
            mode="outlined"
            label="Major"
            value={expertInfo.major}
            editable={isEdit}
            style={{ flex: 1 }}
            left={<TextInput.Icon icon={MajorMap.get(expertInfo.major).icon} />}
            dense
            onChangeText={(text) =>
              setExpertInfo((expertInfo) => ({ ...expertInfo, first_name: text }))
            }
          />
          <StarRating
            rating={expertInfo.rating}
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
          onPress={() => RootNavigate.navigate(SCREEN.CERTIFICATE, {})}
        >
          <IconButton icon="medal-outline" />
          <Text style={textStyles.certificate}>
            {expertInfo.certificates.length} certificates
          </Text>
          <IconButton icon="chevron-right" style={{ marginLeft: 'auto' }} />
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          {isEdit ? (
            <View style={{ flexDirection: 'row', alignSelf: 'flex-end', gap: 10 }}>
              <Button icon="pencil" mode="outlined">
                Save
              </Button>
              <Button
                icon="cancel"
                textColor="white"
                mode="contained"
                onPress={() => setEdit(false)}
              >
                Cancel
              </Button>
            </View>
          ) : (
            <Button icon="pencil" mode="outlined" onPress={() => setEdit(true)}>
              Edit
            </Button>
          )}
        </View>
      </View>
    </View>
  )
}
