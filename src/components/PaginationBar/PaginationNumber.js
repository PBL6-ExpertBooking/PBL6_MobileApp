/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { IconButton, Modal, Portal } from 'react-native-paper'
import { styles } from './style.module'
import { colors } from '../../themes'

export default function PaginationNumber({ num, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.numberButton, { borderColor: 'black' }]}
      onPress={() => onPress(num)}
    >
      <Text style={{ fontSize: 17 }}>{num}</Text>
    </TouchableOpacity>
  )
}
