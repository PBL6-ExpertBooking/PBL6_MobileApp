import React, { useContext } from 'react'
import { RootNavigate } from '../../../../../../../navigation'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Avatar, IconButton } from 'react-native-paper'
import { styles, textStyles } from './style.module'
import { AuthContext } from '../../../../../../../contexts'
import { ROLE, SCREEN } from '../../../../../../../constants'
import { defaultAvatar } from '../../../../../../../assets'
import {
  currencyUtils,
  nameUltils,
  storeUtils,
  tokenUtils,
} from '../../../../../../../utils'
import ExpertOption from './ExpertOption'
import UserOption from './UserOption'
import ExpertStatitics from './ExpertStatitics'
import { useTranslation } from 'react-i18next'

export default function Profile() {
  const { user, setUser, expertInfo } = useContext(AuthContext)

  const { t } = useTranslation()

  const logout = () => {
    setUser(null)
    storeUtils.clearTokens()
    tokenUtils.setAxiosAccessToken('')
    RootNavigate.navigate(SCREEN.HOME)
  }

  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Avatar.Image
              source={user.photo_url ? { uri: user.photo_url } : defaultAvatar}
              size={100}
            />
          </View>
          <View style={styles.avatarTextContainer}>
            <Text style={[textStyles.name]}>{nameUltils.getNameString(user)}</Text>
            <Text style={[textStyles.balance]}>
              {currencyUtils.formatCurrency(user.balance)}
            </Text>
            <TouchableOpacity
              style={styles.backgroundButton}
              onPress={() => RootNavigate.navigate(SCREEN.ACCOUNT_INFO)}
            >
              <IconButton
                icon="pencil"
                style={styles.editButton}
                iconColor="white"
                size={20}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContentContainer}
        style={styles.scrollContainer}
      >
        {user.role === ROLE.USER && <UserOption />}
        {user.role === ROLE.EXPERT && expertInfo && (
          <ExpertStatitics expertInfo={expertInfo} />
        )}
        {user.role === ROLE.EXPERT && <ExpertOption />}
        <View style={styles.optionContainer}>
          <Text style={textStyles.optionGroupTitle}>{t('others')}</Text>
          <View style={styles.option}>
            <TouchableOpacity
              style={styles.optionItem}
              onPress={() => RootNavigate.navigate(SCREEN.SETTING)}
            >
              <View style={styles.iconContainer}>
                <IconButton icon="cog" style={styles.icon} size={30} />
              </View>
              <View style={styles.textContainer}>
                <Text style={[textStyles.itemText]}>{t('setting')}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionItem}>
              <View style={styles.iconContainer}>
                <IconButton
                  icon="book-account-outline"
                  style={styles.icon}
                  size={30}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={[textStyles.itemText]}>{t('termAndCondition')}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionItem}
              onPress={() => RootNavigate.navigate(SCREEN.FEEDBACK)}
            >
              <View style={styles.iconContainer}>
                <IconButton
                  icon="message-alert-outline"
                  style={styles.icon}
                  size={30}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={textStyles.optionItem}>{t('feedback')}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionItem}
              onPress={() => RootNavigate.navigate(SCREEN.CHANGE_PWD)}
            >
              <View style={styles.iconContainer}>
                <IconButton icon="lock-reset" style={styles.icon} size={30} />
              </View>
              <View style={styles.textContainer}>
                <Text style={textStyles.optionItem}>{t('changePassword')}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionItem} onPress={logout}>
              <View style={styles.iconContainer}>
                <IconButton icon="logout" style={styles.icon} size={30} />
              </View>
              <View style={styles.textContainer}>
                <Text style={textStyles.optionItem}>{t('signOut')}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
