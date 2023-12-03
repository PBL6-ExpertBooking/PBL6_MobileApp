import React from 'react'
import { Card, IconButton } from 'react-native-paper'
import { styles } from './style.module'
import { Text, TouchableOpacity, View } from 'react-native'
import { useTranslation } from 'react-i18next'

export default function CertificateCardItem({ item, showModal, setSelectedIndex }) {
  const { major, name, photo_url, descriptions } = item

  const { t } = useTranslation()

  return (
    <Card mode="outlined" style={styles.container}>
      <Card.Cover source={{ uri: photo_url }} />
      <Card.Content>
        <View style={styles.cardTitle}>
          <IconButton icon="certificate" mode="outlined" size={40} />
          <View style={styles.titleTextContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontWeight: 600, fontSize: 20 }}>{t('title')}: </Text>
              <Text style={{ fontSize: 20 }}>{name}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontWeight: 600, fontSize: 16 }}>{t('major')}: </Text>
              <Text style={{ fontSize: 16 }}>{major.name}</Text>
            </View>
          </View>
        </View>
        {descriptions && <Text style={{ alignSelf: 'center' }}>{descriptions}</Text>}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setSelectedIndex()
            showModal()
          }}
        >
          <Text>{t('viewCertificate')}</Text>
        </TouchableOpacity>
      </Card.Content>
    </Card>
  )
}
