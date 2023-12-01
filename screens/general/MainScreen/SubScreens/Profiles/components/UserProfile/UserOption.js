import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Divider, IconButton } from 'react-native-paper'
import { styles } from './style.module'
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
    <View style={styles.option}>
      <TouchableOpacity style={styles.optionItem} onPress={showDepositModal}>
        <IconButton icon="cash-fast" />
        <Text style={{ fontSize: 18, fontWeight: 600 }}>{t('balanceDeposit')}</Text>
      </TouchableOpacity>
      <Divider style={{ width: '100%' }} bold />
      <TouchableOpacity
        style={styles.optionItem}
        onPress={() => RootNavigate.navigate(SCREEN.CURRENT_REQUEST)}
      >
        <IconButton icon="billboard" />
        <Text style={{ fontSize: 18, fontWeight: 600 }}>{t('yourJobRequests')}</Text>
      </TouchableOpacity>
      <DepositModal visible={depositModalVisibility} hideModal={hideDepositModal} />
    </View>
  )
}
