import React from 'react'
import { View, Text } from 'react-native'
import { useTranslation } from 'react-i18next'
import { LanguageSwitch } from '../../../components'
import { styles, textStyles } from './style.module'

export default function Setting() {
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <View style={styles.settingGroup}>
        <View style={styles.item}>
          <Text style={[textStyles.itemText]}>{t('language')}</Text>
          <LanguageSwitch />
        </View>
      </View>
    </View>
  )
}
