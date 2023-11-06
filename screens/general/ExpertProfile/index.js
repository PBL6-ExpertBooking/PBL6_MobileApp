import React from 'react'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { Avatar, IconButton, TextInput } from 'react-native-paper'
import { styles, textStyles } from './style.module'
import { Dropdown } from 'react-native-element-dropdown'
import StarRating from 'react-native-star-rating-widget'
import GenderIcon from '../../../components/GenderIcon'
import { GENDER, SCREEN } from '../../../constants'
import * as RootNavigate from '../../../navigation/root'

export default function ExpertProfile({ route }) {
  const { user, certificates, descriptions, average_rating, rating_count } =
    route.params.info

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
                <Text>
                  {average_rating} stars/{rating_count} reviews
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.certificateContainer}
              onPress={() => RootNavigate.navigate(SCREEN.CERTIFICATE)}
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
    </View>
  )
}
