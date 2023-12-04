import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './style.module'
import { useTranslation } from 'react-i18next'

export default function AuthRedirect() {
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 800 }}>{t('emailNotVerified')}</Text>
      <Text style={{ fontSize: 17, fontWeight: 500 }}>
        {t('notVerifiedMessage')}
      </Text>
    </View>
  )
}
