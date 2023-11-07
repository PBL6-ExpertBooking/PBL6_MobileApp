import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { IconButton } from 'react-native-paper'
import { styles } from './style.module'
import { RootNavigate } from '../../../../../../../navigation'
import { SCREEN } from '../../../../../../../constants'

export default function UserOption() {
  return (
    <View style={styles.option}>
      <TouchableOpacity
        style={styles.optionItem}
        onPress={() => RootNavigate.navigate(SCREEN.CURRENT_REQUEST)}
      >
        <IconButton icon="billboard" />
        <Text style={{ fontSize: 18, fontWeight: 600 }}>Your Job Requests</Text>
      </TouchableOpacity>
    </View>
  )
}
