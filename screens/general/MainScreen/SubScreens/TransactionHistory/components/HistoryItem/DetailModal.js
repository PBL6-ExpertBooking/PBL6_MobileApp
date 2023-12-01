import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { IconButton, Modal, Portal } from 'react-native-paper'
import { modalStyles as styles } from './style.module'
import {
  currencyUtils,
  datetimeHelper,
  nameUltils,
} from '../../../../../../../utils'
import { RootNavigate } from '../../../../../../../navigation'
import { SCREEN } from '../../../../../../../constants'
import { statuColorMap } from '../colorMap'
import { useTranslation } from 'react-i18next'

export default function DetailModal({
  visible,
  hideModal,
  isDeposit,
  isExpert,
  data,
}) {
  const {
    _id,
    user,
    expert,
    job_request,
    amount,
    transaction_type,
    transaction_status,
    updatedAt,
  } = data

  const { t } = useTranslation()

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.container}
      >
        <View style={styles.title}>
          <Text style={{ fontSize: 17, fontWeight: 700 }}>
            {t('transactionDetailTitle')}
          </Text>
        </View>
        <View>
          <View style={styles.dataContainer}>
            <Text>{t('transactionId')}:</Text>
            <Text>{_id}</Text>
          </View>
          <View style={styles.dataContainer}>
            <Text>{t('from')}:</Text>
            <Text>{nameUltils.getNameString(user)}</Text>
          </View>
          {expert && (
            <View style={styles.dataContainer}>
              <Text>{t('to')}:</Text>
              <TouchableOpacity
                style={styles.avatarContainer}
                onPress={() => {
                  hideModal()
                  RootNavigate.navigate(SCREEN.EXPERT_PROFILE, {
                    info: { _id: job_request.expert },
                    refetchData: true,
                  })
                }}
                disabled={isExpert}
              >
                <Text style={{ color: '#0000EE', textDecorationLine: 'underline' }}>
                  {nameUltils.getNameString(expert)}
                </Text>
              </TouchableOpacity>
            </View>
          )}
          <View style={styles.dataContainer}>
            <Text>{t('date')}:</Text>
            <Text>{datetimeHelper.convertISOToNormalDate(updatedAt)}</Text>
          </View>
          {job_request && (
            <View style={styles.dataContainer}>
              <Text>{t('jobId')}:</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>{job_request._id}</Text>
                <IconButton
                  icon="chevron-right"
                  size={15}
                  style={{ height: 15, width: 15 }}
                />
              </View>
            </View>
          )}
          <View style={styles.dataContainer}>
            <Text>{t('balance')}:</Text>
            <Text>
              {`${isDeposit ? '+' : '-'}${currencyUtils.formatCurrency(amount)}`}
            </Text>
          </View>
          <View style={styles.dataContainer}>
            <Text>{t('transactionStatus')}</Text>
            <Text style={{ color: statuColorMap.get(transaction_status) }}>
              {t(transaction_status)}
            </Text>
          </View>
          <View style={styles.dataContainer}>
            <Text>{t('transactionType')}</Text>
            <Text>{t(transaction_type)}</Text>
          </View>
        </View>
      </Modal>
    </Portal>
  )
}
