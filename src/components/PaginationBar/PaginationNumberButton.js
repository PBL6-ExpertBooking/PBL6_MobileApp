/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { IconButton, Modal, Portal } from 'react-native-paper'
import { styles } from './style.module'
import { colors } from '../../themes'
import PaginationNumber from './PaginationNumber'

export default function PaginationNumberButton({
  page,
  maxPage,
  onPageChange,
  modalBottomOffset,
}) {
  const [modalVisibility, setModalVisibility] = useState(false)

  const showModal = () => setModalVisibility(true)
  const hideModal = () => setModalVisibility(false)

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
      {page > 2 && <PaginationNumber num={page - 1} onPress={onPageChange} />}
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.numberButton}
        onPress={showModal}
      >
        <IconButton
          icon="chevron-up"
          style={styles.numberTop}
          iconColor={colors.secondary}
          size={30}
        />
        <Text style={{ fontSize: 17 }}>{page}</Text>
      </TouchableOpacity>
      {page < maxPage - 1 && (
        <PaginationNumber num={page + 1} onPress={onPageChange} />
      )}
      <Portal>
        <Modal
          contentContainerStyle={[
            styles.modalContainer,
            { bottom: modalBottomOffset },
          ]}
          visible={modalVisibility}
          onDismiss={hideModal}
        >
          <ScrollView
            horizontal
            contentContainerStyle={styles.numberScroll}
            style={styles.numberSrcollContainer}
            showsHorizontalScrollIndicator
          >
            {Array.from({ length: maxPage }, (_, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.numberButton,
                  index + 1 === page
                    ? { backgroundColor: colors.secondary }
                    : { borderColor: 'black' },
                ]}
                onPress={() => {
                  hideModal()
                  onPageChange(index + 1)
                }}
                activeOpacity={0.6}
                disabled={page === index}
              >
                <Text style={{ color: index + 1 === page ? 'white' : 'black' }}>
                  {index + 1}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Modal>
      </Portal>
    </View>
  )
}
