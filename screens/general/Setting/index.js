import React, { useContext } from 'react'
import { View } from 'react-native'
import { SettingContext } from '../../../contexts'

export default function Setting() {
  const { lng, setLng } = useContext(SettingContext)

  return <View></View>
}
