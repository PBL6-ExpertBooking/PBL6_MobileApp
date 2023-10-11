import React, { useContext, useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import { styles, textStyles } from './style.module'
import { AuthContext } from '../../../../contexts'
import { Button, IconButton, TextInput } from 'react-native-paper'
import StarRating from 'react-native-star-rating'
import { MajorMap } from '../../../../utils/Majors'

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
            maxStars={5}
            rating={expertInfo.rating}
            starSize={30}
            fullStarColor="red"
            halfStarColor="red"
            emptyStarColor="red"
            disabled
          />
        </View>
        <TouchableOpacity style={styles.certificateContainer}>
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
