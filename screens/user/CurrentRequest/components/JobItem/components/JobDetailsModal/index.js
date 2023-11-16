import React, { useState } from 'react'
import { styles, textStyles } from './style.module'
import {
  ActivityIndicator,
  Avatar,
  Button,
  Modal,
  TextInput,
} from 'react-native-paper'
import { View, Text, TouchableOpacity } from 'react-native'
import { Status } from '../../../../../../../components/StatusChip'
import { SCREEN, STATUS } from '../../../../../../../constants'
import { jobService } from '../../../../../../../services'
import { RootNavigate } from '../../../../../../../navigation'

export default function JobDetailsModal({
  data,
  visible,
  hideModal,
  openReviewModal,
  expertInfo,
}) {
  const { _id, user, descriptions, price, address, title, status } = data

  const [loading, setLoading] = useState(false)

  return (
    <Modal
      visible={visible}
      onDismiss={hideModal}
      contentContainerStyle={styles.modalContentContainer}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalTitle}>
          <Text style={{ fontSize: 15, fontWeight: 600 }}>Test</Text>
        </View>
        <View style={styles.jobTitle}>
          <Text style={{ fontSize: 20, fontWeight: 600 }}>
            {title || 'No Title'}
          </Text>
        </View>
        <TextInput
          style={styles.jobDescription}
          value={descriptions}
          editable={false}
          multiline
        />
      </View>
      <View style={{ gap: 10 }}>
        <View style={styles.jobInfoField}>
          <Text style={textStyles.infoField}>Payment Method:</Text>
        </View>
        <View style={styles.jobInfoField}>
          <Text style={textStyles.infoField}>Budget:</Text>
          <Text style={textStyles.infoField}>{price}</Text>
        </View>
        <View style={styles.jobInfoField}>
          <Text style={textStyles.infoField}>Requester:</Text>
          <Text style={textStyles.infoField}>
            {user.first_name + ' ' + user.last_name}
          </Text>
        </View>
        <View style={styles.jobInfoField}>
          <Text style={textStyles.infoField}>Address:</Text>
          {address && (
            <Text
              style={[textStyles.infoField, textStyles.addressText]}
            >{`${address.city.name}, ${address.district.name}, ${address.ward.name}`}</Text>
          )}
        </View>
        <View style={styles.jobInfoField}>
          <Text style={textStyles.infoField}>Status:</Text>
          <View style={styles.statusContainer}>
            {expertInfo && (
              <TouchableOpacity
                onPress={() => {
                  hideModal()
                  RootNavigate.navigate(SCREEN.EXPERT_PROFILE, {
                    info: expertInfo,
                  })
                }}
              >
                <Avatar.Image
                  source={{ uri: expertInfo.user.photo_url }}
                  size={30}
                />
              </TouchableOpacity>
            )}
            <Status.Chip status={status} />
          </View>
        </View>
        {status === STATUS.PROCESSING && !loading && (
          <View style={styles.buttonContainer}>
            <Button
              icon="check"
              buttonColor="#2e63c9"
              textColor="white"
              style={{ flex: 1 }}
              onPress={async () => {
                setLoading(true)
                await jobService.markComplete({ id: _id })
                hideModal()
                openReviewModal()
              }}
            >
              Complete
            </Button>
            <Button mode="outlined" style={{ flex: 1 }} onPress={hideModal}>
              Back
            </Button>
          </View>
        )}
        {status === STATUS.PROCESSING && loading && (
          <ActivityIndicator size="large" animating={true} />
        )}
      </View>
    </Modal>
  )
}
