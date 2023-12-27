import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles, textStyles } from './style.module'
import { expertService } from '../../../services'
import { ActivityIndicator, IconButton } from 'react-native-paper'
import { useTranslation } from 'react-i18next'
import CardInputForm from './CardInputForm'
import { CardDisplay } from '../../../components'

export default function CreditCardManagement() {
  const [cardInfo, setCardInfo] = useState(null)
  const [formVisible, setFormVisible] = useState(false)
  const [loading, setLoading] = useState(false)

  const { t } = useTranslation()

  useEffect(() => {
    const getCardInfo = async () => {
      setLoading(true)
      const data = await expertService.getCurrentCreditCard()
      setCardInfo(data.bank_account)
      setLoading(false)
    }
    getCardInfo()
  }, [])

  const updateCardInfo = async (data) => {
    const response = await expertService.updateCurrentCreditCard({
      number: data.number,
      owner_name: data.ownerName,
      bank_name: data.bankName,
    })
    setCardInfo(response.bank_account)
    setFormVisible(false)
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContentContainer}
        style={styles.scrollContainer}
      >
        {loading && (
          <ActivityIndicator
            style={{ alignSelf: 'center' }}
            animating
            size="large"
          />
        )}
        {!loading && (
          <View style={{ width: '100%' }}>
            {cardInfo && (
              <View style={styles.cardGroupContainer}>
                <CardDisplay cardInfo={cardInfo} />
                {formVisible ? (
                  <CardInputForm
                    isNew={false}
                    data={cardInfo}
                    onSubmit={updateCardInfo}
                    onCancel={() => setFormVisible(false)}
                  />
                ) : (
                  <TouchableOpacity
                    style={styles.buttonEdit}
                    onPress={() => setFormVisible(true)}
                  >
                    <View style={styles.innerButton}>
                      <View style={styles.iconContainer}>
                        <IconButton
                          icon="credit-card-edit-outline"
                          style={styles.icon}
                          size={25}
                          iconColor="white"
                        />
                      </View>
                      <Text style={[textStyles.buttonText]}>{t('edit')}</Text>
                    </View>
                  </TouchableOpacity>
                )}
              </View>
            )}
            {!cardInfo &&
              (formVisible ? (
                <CardInputForm isNew={true} onSubmit={updateCardInfo} />
              ) : (
                <TouchableOpacity
                  style={styles.buttonNewCard}
                  onPress={() => setFormVisible(true)}
                >
                  <View style={styles.innerButton}>
                    <View style={styles.iconContainer}>
                      <IconButton
                        icon="credit-card-plus-outline"
                        style={styles.icon}
                        size={25}
                      />
                    </View>
                    <Text>{t('addCreditCard')}</Text>
                  </View>
                </TouchableOpacity>
              ))}
          </View>
        )}
      </ScrollView>
    </View>
  )
}
