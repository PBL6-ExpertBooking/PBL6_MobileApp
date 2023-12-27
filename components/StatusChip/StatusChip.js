import React from 'react'
import { colorMap } from './colorMapping'
import { StyleSheet, Text, View } from 'react-native'
import i18n from '../../config/i18n'

const style = StyleSheet.create({
  default: {
    opacity: 0.8,
    borderRadius: 30,
    padding: 0,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default function StatusChip({ status }) {
  const { bgColor, textColor, text } = colorMap.get(status)

  return (
    <View
      style={[
        style.default,
        {
          backgroundColor: bgColor,
        },
      ]}
    >
      <Text style={[{ color: textColor }]}>{i18n.t(text.toUpperCase())}</Text>
    </View>
  )
}
