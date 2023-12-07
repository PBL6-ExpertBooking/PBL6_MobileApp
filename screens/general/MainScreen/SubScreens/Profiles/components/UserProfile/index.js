import React, { useContext } from 'react'
import { RootNavigate } from '../../../../../../../navigation'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Avatar, Button, Divider, IconButton } from 'react-native-paper'
import { styles } from './style.module'
import { AuthContext } from '../../../../../../../contexts'
import { ROLE, SCREEN } from '../../../../../../../constants'
import {
  currencyUtils,
  nameUltils,
  storeUtils,
  tokenUtils,
} from '../../../../../../../utils'
import ExpertOption from './ExpertOption'
import UserOption from './UserOption'
import { useTranslation } from 'react-i18next'

export default function Profile() {
  const { user, setUser } = useContext(AuthContext)

  const { t } = useTranslation()

  const logout = () => {
    setUser(null)
    storeUtils.clearTokens()
    tokenUtils.setAxiosAccessToken('')
    RootNavigate.navigate(SCREEN.HOME)
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.avatarContainer}
        onPress={() => RootNavigate.navigate(SCREEN.ACCOUNT_INFO)}
      >
        <Avatar.Image source={{ uri: user.photo_url }} size={50} />
        <View style={styles.avatarTextContainer}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            {nameUltils.getNameString(user)}
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontStyle: 'italic',
            }}
          >
            {currencyUtils.formatCurrency(user.balance)}
          </Text>
        </View>
        <IconButton icon="chevron-right" style={{ marginLeft: 'auto' }} />
      </TouchableOpacity>
      {user.role === ROLE.USER && <UserOption />}
      {user.role === ROLE.EXPERT && <ExpertOption />}
      <Divider style={{ width: '100%' }} bold />
      <View style={styles.optionGroup}>
        <TouchableOpacity
          style={styles.optionItem}
          onPress={() => RootNavigate.navigate(SCREEN.SETTING)}
        >
          <IconButton icon="cog" />
          <Text style={{ fontSize: 18, fontWeight: 600 }}>{t('setting')}</Text>
        </TouchableOpacity>
        <Divider bold />
        <TouchableOpacity style={styles.optionItem}>
          <IconButton icon="book-account-outline" />
          <Text style={{ fontSize: 18, fontWeight: 600 }}>
            {t('termAndCondition')}
          </Text>
        </TouchableOpacity>
      </View>
      <Divider style={{ width: '100%' }} bold />
      <TouchableOpacity style={styles.signout} onPress={logout}>
        <Button icon="logout">
          <Text style={{ fontSize: 18, fontWeight: 600 }}>{t('signOut')}</Text>
        </Button>
      </TouchableOpacity>
    </ScrollView>
  )
}
