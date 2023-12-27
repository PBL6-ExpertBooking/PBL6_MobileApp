import React from 'react'
import { View, Text } from 'react-native'
import { useTranslation } from 'react-i18next'
import { LanguageSwitch } from '../../../components'

export default function Setting() {
  const { t } = useTranslation()

  return (
    <View>
      <View>
        <Text>{t('language')}</Text>
        <LanguageSwitch />
      </View>
    </View>
  )
}
