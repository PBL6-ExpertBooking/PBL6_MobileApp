import React, { useState } from 'react'
import { Button, Modal, Portal, Text, PaperProvider } from 'react-native-paper'
import { styles } from './style.module'

export default function SideMenu() {
  const [visible, setVisible] = useState(false)

  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)

  return (
    <PaperProvider>
      <Portal>
        <Modal
          contentContainerStyle={styles.container}
          visible={visible}
          onDismiss={hideModal}
        >
          <Text>Example Modal. Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
      <Button style={styles.toggle} onPress={showModal}>
        Show
      </Button>
    </PaperProvider>
  )
}

SideMenu.propTypes = {}
