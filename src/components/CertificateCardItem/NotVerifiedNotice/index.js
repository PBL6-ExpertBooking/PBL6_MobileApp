import React from 'react'
import { ScrollView, View } from 'react-native'
import { Modal, Portal } from 'react-native-paper'
import { styles } from './style.module'
import { Text } from 'react-native'
import { useTranslation } from 'react-i18next'

export default function NotVerifiedNotice({ visible, hideModal }) {
  const { t } = useTranslation()

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.modalContainer}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.reviewContainer}>
            <Text>{t('certificateNotVerified')}</Text>
          </View>
        </ScrollView>
      </Modal>
    </Portal>
  )
}
