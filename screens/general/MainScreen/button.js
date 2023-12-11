import React from 'react'
import { IconButton, TouchableRipple } from 'react-native-paper'
import { styles } from './style.module'
import { Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'

export default function RenderButton({ index, route, onPress, selected }) {
  const { t } = useTranslation()
  return (
    <TouchableRipple
      rippleColor="white"
      style={[
        styles.buttonContainer,
        selected
          ? styles.focusedButtonContainer
          : { backgroundColor: 'transparent' },
      ]}
      onPress={() => onPress(index)}
      disabled={selected}
    >
      <View style={[styles.iconContainer, selected && styles.focusedIconContainer]}>
        <IconButton
          icon={route.focusedIcon}
          size={24}
          style={[styles.iconButton, selected && styles.focusedIcon]}
          iconColor={selected ? 'black' : 'white'}
        />
        {selected && <Text style={{ fontSize: 12 }}>{t(route.key)}</Text>}
      </View>
    </TouchableRipple>
  )
}
