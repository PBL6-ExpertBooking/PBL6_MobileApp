import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './style.module'
import { Avatar } from 'react-native-paper'
import {
  currencyUtils,
  datetimeHelper,
  nameUltils,
} from '../../../../../../../../../utils'

export default function Receipt({ transaction, user }) {
  const { amount, createdAt, expert } = transaction

  return (
    <View style={styles.container}>
      <View style={styles.infoField}>
        <Text>From:</Text>
        <View style={styles.avatarContainer}>
          <Avatar.Image source={{ uri: user.photo_url }} size={30} />
          <Text>{nameUltils.getNameString(user)}</Text>
        </View>
      </View>
      <View style={styles.infoField}>
        <Text>To:</Text>
        <View style={styles.avatarContainer}>
          <Avatar.Image source={{ uri: expert.photo_url }} size={30} />
          <Text>{nameUltils.getNameString(expert)}</Text>
        </View>
      </View>
      <View style={styles.infoField}>
        <Text>Date:</Text>
        <Text>{datetimeHelper.convertISOToNormalDate(createdAt)}</Text>
      </View>
      <View style={styles.infoField}>
        <Text>Your balance:</Text>
        <Text>{currencyUtils.formatCurrency(user.balance)}</Text>
      </View>
      <View style={styles.infoField}>
        <Text>Payment value:</Text>
        <Text>{currencyUtils.formatCurrency(amount)}</Text>
      </View>
      <View style={styles.infoField}>
        <Text>Fee:</Text>
        <Text>0đ</Text>
      </View>
      <View style={[styles.infoField, { borderTopWidth: 1 }]}>
        <Text>Remaining:</Text>
        <Text>{currencyUtils.formatCurrency(user.balance - amount)}</Text>
      </View>
    </View>
  )
}
