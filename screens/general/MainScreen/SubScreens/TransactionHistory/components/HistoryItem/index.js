import React, { useState, useContext } from 'react'
import { Text, View } from 'react-native'
import { IconButton } from 'react-native-paper'
import { styles } from './style.module'
import { currencyUtils, datetimeHelper } from '../../../../../../../utils'
import { AuthContext } from '../../../../../../../contexts'
import { statuColorMap } from '../colorMap'
import DetailModal from './DetailModal'
import { ROLE } from '../../../../../../../constants'
import { useTranslation } from 'react-i18next'

export default function HistoryItem({ transaction }) {
  const { expert, job_request, amount, transaction_status, updatedAt } = transaction
  const { user } = useContext(AuthContext)
  const [modalVisibility, setModalVisibility] = useState(false)

  const showModal = () => setModalVisibility(true)
  const hideModal = () => setModalVisibility(false)

  const { t } = useTranslation()

  const isDeposit = !expert || user.role === ROLE.EXPERT

  return (
    <View
      style={[
        styles.container,
        { shadowColor: statuColorMap.get(transaction_status) },
      ]}
    >
      <View style={styles.leftContainer}>
        <Text style={{ fontSize: 18, fontWeight: 600 }}>
          {job_request?.title || t('balanceDeposit')}
        </Text>
        <Text>{datetimeHelper.convertISOToNormalDate(updatedAt)}</Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={{ color: isDeposit ? '#5cb85c' : '#ff4842' }}>{`${
            isDeposit ? '+' : '-'
          }${currencyUtils.formatCurrency(amount)}`}</Text>
          <Text style={{ color: statuColorMap.get(transaction_status) }}>
            {t(transaction_status)}
          </Text>
        </View>
        <IconButton
          icon="chevron-right"
          onPress={showModal}
          style={{ borderRadius: 0 }}
        />
      </View>
      <DetailModal
        visible={modalVisibility}
        hideModal={hideModal}
        isDeposit={isDeposit}
        isExpert={user.role === ROLE.EXPERT}
        data={transaction}
      />
    </View>
  )
}
