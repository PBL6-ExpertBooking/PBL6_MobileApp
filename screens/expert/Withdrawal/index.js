import React, { useContext, useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { ActivityIndicator, IconButton, TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { styles, textStyles } from './style.module'
import { expertService } from '../../../services'
import { useTranslation } from 'react-i18next'
import { CardDisplay } from '../../../components'
import { popupUtils } from '../../../utils'
import { AuthContext } from '../../../contexts'

export default function Withdrawal() {
  const [cardInfo, setCardInfo] = useState(null)
  const [usedCard, setUsedCard] = useState({
    number: '',
    owner_name: '',
    bank_name: '',
  })
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)

  const { user } = useContext(AuthContext)
  const navigation = useNavigation()
  const { t } = useTranslation()

  useEffect(() => {
    const getCardInfo = async () => {
      const data = await expertService.getCurrentCreditCard()
      setCardInfo(data.bank_account)
    }
    getCardInfo()
  }, [])

  const validate = () => {
    if (!value) {
      popupUtils.error.popupMessage({ message: t('noWithdrawalValue') })
      return false
    }
    if (!usedCard.number) {
      popupUtils.error.popupMessage({ message: t('noCardNumber') })
      return false
    }
    if (!usedCard.owner_name) {
      popupUtils.error.popupMessage({ message: t('noOwnerName') })
      return false
    }
    if (!usedCard.bank_name) {
      popupUtils.error.popupMessage({ message: t('noBankName') })
      return false
    }
    if (user.balance < parseInt(value)) {
      popupUtils.error.popupMessage({ message: t('noEnoughBalance') })
      return false
    }
    return true
  }

  const handleWithdrawal = async () => {
    setLoading(true)
    await expertService.withdrawal({ amount: value, bank_account: usedCard })
    popupUtils.success.popupMessage({ message: t('withdrawalSuccess') })
    navigation.goBack()
    setLoading(false)
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContentContainer}
        style={styles.scrollContainer}
      >
        <View style={styles.valueContainer}>
          <TextInput
            mode="outlined"
            label={t('withdrawalValue')}
            keyboardType="numeric"
            value={value}
            onChangeText={(text) => setValue(text)}
            style={styles.input}
            dense
          />
        </View>
        <View style={styles.cardInfoContainer}>
          <Text style={[styles.groupTitle, textStyles.groupTitle]}>
            {t('cardInfo')}
          </Text>
          <View style={styles.cardInfoInputContainer}>
            <TextInput
              mode="outlined"
              label={t('cardNumber')}
              value={usedCard.number}
              onChangeText={(text) =>
                setUsedCard((info) => ({ ...info, number: text }))
              }
              style={styles.input}
              dense
            />
            <TextInput
              mode="outlined"
              label={t('ownerName')}
              value={usedCard.owner_name}
              onChangeText={(text) =>
                setUsedCard((info) => ({ ...info, owner_name: text }))
              }
              style={styles.input}
              dense
            />
            <TextInput
              mode="outlined"
              label={t('bankName')}
              value={usedCard.bank_name}
              onChangeText={(text) =>
                setUsedCard((info) => ({ ...info, bank_name: text }))
              }
              style={styles.input}
              dense
            />
          </View>
        </View>
        {cardInfo && (
          <View style={styles.userCard}>
            <Text style={[styles.groupTitle, textStyles.groupTitle]}>
              {t('useYourCard')}
            </Text>
            <TouchableOpacity
              onPress={() => setUsedCard(cardInfo)}
              activeOpacity={0.6}
            >
              <CardDisplay cardInfo={cardInfo} />
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.buttonContainer}>
          {loading && <ActivityIndicator animating size="large" />}
          {!loading && (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                if (validate()) handleWithdrawal()
              }}
              activeOpacity={0.6}
            >
              <View style={styles.iconContainer}>
                <IconButton
                  icon="credit-card-refund-outline"
                  iconColor="white"
                  size={20}
                  style={styles.icon}
                />
              </View>
              <Text style={[textStyles.buttonText]}>{t('withdrawal')}</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  )
}
