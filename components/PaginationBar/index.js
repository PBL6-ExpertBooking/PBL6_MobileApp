import React from 'react'
import { View } from 'react-native'
import { IconButton } from 'react-native-paper'
import { styles } from './style.module'
import PaginationNumberButton from './PaginationNumberButton'
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
        {page > 1 && <PaginationNumber num={1} onPress={onPageChange} />}
        {page > 3 && (
          <IconButton icon="dots-horizontal" size={15} style={{ margin: 0 }} />
        )}
        <PaginationNumberButton
          page={page}
          maxPage={maxPage}
          onPageChange={onPageChange}
          modalBottomOffset={modalBottomOffset}
        />
        {page < maxPage - 2 && (
          <IconButton icon="dots-horizontal" size={15} style={{ margin: 0 }} />
        )}
        {page < maxPage && <PaginationNumber num={maxPage} onPress={onPageChange} />}
      </View>
    </View>
  )
}
