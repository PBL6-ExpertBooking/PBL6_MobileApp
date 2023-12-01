import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { ToggleButton } from 'react-native-paper'
import { SettingContext } from '../../contexts'

export default function LanguageSwitch({ style }) {
  const { lng, setLng } = useContext(SettingContext)

  return (
    <View style={style}>
      <ToggleButton.Row value={lng} onValueChange={(value) => setLng(value)}>
        <ToggleButton
          icon={() => (
            <Text style={{ color: lng === 'vi' ? 'white' : 'black' }}>VI</Text>
          )}
          value="vi"
          style={{ height: 20, backgroundColor: lng === 'vi' ? 'red' : 'white' }}
          disabled={lng === 'vi'}
        />
        <ToggleButton
          icon={() => (
            <Text style={{ color: lng === 'en' ? 'white' : 'black' }}>EN</Text>
          )}
          value="en"
          style={{ height: 20, backgroundColor: lng === 'en' ? 'blue' : 'white' }}
          disabled={lng === 'en'}
        />
      </ToggleButton.Row>
    </View>
  )
}
