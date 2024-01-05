import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './style.module'
import { Avatar } from 'react-native-paper'
import {
  currencyUtils,
  datetimeHelper,
  nameUltils,
} from '../../../../../../../../../utils'
import { useTranslation } from 'react-i18next'

export default function Receipt({ transaction, user }) {
  const { amount, fee, createdAt, expert } = transaction

  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <View style={styles.infoField}>
        <Text>{t('from')}:</Text>
        <View style={styles.avatarContainer}>
          <Avatar.Image source={{ uri: user.photo_url }} size={30} />
          <Text>{nameUltils.getNameString(user)}</Text>
        </View>
      </View>
      <View style={styles.infoField}>
        <Text>{t('to')}:</Text>
        <View style={styles.avatarContainer}>
          <Avatar.Image source={{ uri: expert.photo_url }} size={30} />
          <Text>{nameUltils.getNameString(expert)}</Text>
        </View>
      </View>
      <View style={styles.infoField}>
        <Text>{t('date')}:</Text>
        <Text>{datetimeHelper.convertISOToNormalDate(createdAt)}</Text>
      </View>
      <View style={styles.infoField}>
        <Text>{t('balance')}:</Text>
        <Text>{currencyUtils.formatCurrency(user.balance)}</Text>
      </View>
      <View style={styles.infoField}>
        <Text>{t('price')}:</Text>
        <Text>{currencyUtils.formatCurrency(amount)}</Text>
      </View>
      <View style={styles.infoField}>
        <Text>{t('fee')}:</Text>
        <Text>{currencyUtils.formatCurrency(fee)}</Text>
      </View>
      <View style={[styles.infoField, { borderTopWidth: 1 }]}>
        <Text>{t('remaining')}:</Text>
        <Text>{currencyUtils.formatCurrency(user.balance - amount - fee)}</Text>
      </View>
    </View>
  )
}
