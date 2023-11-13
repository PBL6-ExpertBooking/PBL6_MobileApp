import React from 'react'
import { Chip } from 'react-native-paper'
import { colorMap } from './colorMapping'
import { StyleSheet } from 'react-native'

const style = StyleSheet.create({ opacity: 0.8, borderRadius: 30, padding: 0 })

export default function StatusChip({ status }) {
  const { bgColor, textColor, text } = colorMap.get(status)

  return (
    <Chip
      style={[
        style,
        {
          backgroundColor: bgColor,
        },
      ]}
      textStyle={{ color: textColor, alignSelf: 'center' }}
    >
      {text}
    </Chip>
  )
}
