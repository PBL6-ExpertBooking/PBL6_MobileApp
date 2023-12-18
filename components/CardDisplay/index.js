import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles, textStyles } from './style.module'
import { creditCardBG, visaLogo } from '../../assets'

export default function CardDisplay({ cardInfo }) {
  const { number, owner_name, bank_name } = cardInfo

  return (
    <View style={styles.cardContainer}>
      <Image source={creditCardBG} style={styles.cardBG} resizeMode="contain" />
      <View style={styles.cardTextContainer}>
        <Text style={[textStyles.cardText, textStyles.cardNumber]}>{number}</Text>
        <Text style={[textStyles.cardText, textStyles.ownerName]}>{owner_name}</Text>
        <Text style={[textStyles.cardText, textStyles.bankName]}>{bank_name}</Text>
      </View>
      <Image source={visaLogo} style={styles.visaLogo} resizeMode="contain" />
    </View>
  )
}
