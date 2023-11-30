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

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.container}
      >
        <View style={styles.title}>
          <Text style={{ fontSize: 17, fontWeight: 700 }}>TRANSACTION DETAILS</Text>
        </View>
        <View>
          <View style={styles.dataContainer}>
            <Text>Transaction id:</Text>
            <Text>{_id}</Text>
          </View>
          <View style={styles.dataContainer}>
            <Text>From:</Text>
            <Text>{nameUltils.getNameString(user)}</Text>
          </View>
          {expert && (
            <View style={styles.dataContainer}>
              <Text>To:</Text>
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
            <Text>Date:</Text>
            <Text>{datetimeHelper.convertISOToNormalDate(updatedAt)}</Text>
          </View>
          {job_request && (
            <View style={styles.dataContainer}>
              <Text>Job Id:</Text>
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
            <Text>Balance:</Text>
            <Text>
              {`${isDeposit ? '+' : '-'}${currencyUtils.formatCurrency(amount)}`}
            </Text>
          </View>
          <View style={styles.dataContainer}>
            <Text>transaction Status</Text>
            <Text style={{ color: statuColorMap.get(transaction_status) }}>
              {transaction_status}
            </Text>
          </View>
          <View style={styles.dataContainer}>
            <Text>transaction Type</Text>
            <Text>{transaction_type}</Text>
          </View>
        </View>
      </Modal>
    </Portal>
  )
}
