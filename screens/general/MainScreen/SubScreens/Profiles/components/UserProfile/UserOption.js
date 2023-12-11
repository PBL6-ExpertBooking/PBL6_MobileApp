import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { IconButton } from 'react-native-paper'
import { styles, textStyles } from './style.module'
import { RootNavigate } from '../../../../../../../navigation'
import { SCREEN } from '../../../../../../../constants'
import DepositModal from './components/DepositModal'
import { useTranslation } from 'react-i18next'

export default function UserOption() {
  const [depositModalVisibility, setDeposiModalVisibility] = useState(false)

  const showDepositModal = () => setDeposiModalVisibility(true)
  const hideDepositModal = () => setDeposiModalVisibility(false)

  const { t } = useTranslation()

  return (
    <View style={styles.optionContainer}>
      <Text style={[textStyles.optionGroupTitle]}>{t('services')}</Text>
      <View style={styles.option}>
        <TouchableOpacity
          style={styles.optionItem}
          onPress={showDepositModal}
          activeOpacity={0.7}
        >
          <View style={styles.iconContainer}>
            <IconButton icon="cash-fast" style={styles.icon} size={30} />
          </View>
          <View style={styles.textContainer}>
            <Text style={[textStyles.itemText]}>{t('balanceDeposit')}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionItem}
          onPress={() => RootNavigate.navigate(SCREEN.CURRENT_REQUEST)}
          activeOpacity={0.7}
        >
          <View style={styles.iconContainer}>
            <IconButton icon="billboard" style={styles.icon} size={30} />
          </View>
          <View style={styles.textContainer}>
            <Text style={[textStyles.itemText]}>{t('yourJobRequests')}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionItem}
          onPress={() => RootNavigate.navigate(SCREEN.TRANSACTION_HISTORY)}
          activeOpacity={0.7}
        >
          <View style={styles.iconContainer}>
            <IconButton icon="history" style={styles.icon} size={30} />
          </View>
          <View style={styles.textContainer}>
            <Text style={[textStyles.itemText]}>{t('transactionHistory')}</Text>
          </View>
        </TouchableOpacity>
        <DepositModal
          visible={depositModalVisibility}
          hideModal={hideDepositModal}
        />
      </View>
    </View>
  )
}
