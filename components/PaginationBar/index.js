import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { IconButton } from 'react-native-paper'
import { styles } from './style.module'
import PaginationNumber from './PaginationNumber'

export default function PaginationBar({
  page,
  maxPage,
  onPageChange,
  style,
  modalBottomOffset = 0,
}) {
  return (
    <View style={[{ width: '100%' }, style]}>
      <View style={styles.container}>
        <TouchableOpacity disabled={page === 1} onPress={() => onPageChange(1)}>
          <IconButton icon="page-first" disabled={page === 1} />
        </TouchableOpacity>
        <TouchableOpacity
          disabled={page === 1}
          onPress={() => onPageChange(page - 1)}
        >
          <IconButton icon="chevron-left" disabled={page === 1} />
        </TouchableOpacity>
        <PaginationNumber
          page={page}
          maxPage={maxPage}
          onPageChange={onPageChange}
          modalBottomOffset={modalBottomOffset}
        />
        <TouchableOpacity
          disabled={page === maxPage}
          onPress={() => onPageChange(page + 1)}
        >
          <IconButton icon="chevron-right" disabled={page === maxPage} />
        </TouchableOpacity>
        <TouchableOpacity
          disabled={page === maxPage}
          onPress={() => onPageChange(maxPage)}
        >
          <IconButton icon="page-last" disabled={page === maxPage} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
