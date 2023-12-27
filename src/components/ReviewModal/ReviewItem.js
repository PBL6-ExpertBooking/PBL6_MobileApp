import React from 'react'
import { View } from 'react-native'
import { itemStyles as styles } from './style.module'
import { Avatar, IconButton } from 'react-native-paper'
import { Text } from 'react-native'
import { datetimeHelper } from '../../utils'

export default function ReviewItem({ data }) {
  const { user, createdAt, comment, rating } = data

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.avatarContainer}>
          <Avatar.Image source={{ uri: user.photo_url }} size={30} />
          <Text style={{ fontWeight: 700 }}>{user.first_name}</Text>
        </View>
        <View style={styles.commentContainer}>
          <Text>{comment}</Text>
        </View>
        <View style={styles.ratingResult}>
          <Text style={{ fontSize: 20, fontWeight: 800 }}>{rating}</Text>
          <IconButton
            icon="star"
            size={30}
            style={{ height: 30, width: 25 }}
            iconColor="gold"
          />
        </View>
      </View>
      <View>
        <Text style={{ color: 'gray', fontStyle: 'italic', fontSize: 12 }}>
          {datetimeHelper.convertISOToNormalDate(createdAt)}
        </Text>
      </View>
    </View>
  )
}
