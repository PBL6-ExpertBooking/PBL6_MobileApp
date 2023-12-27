import React, { useState, useContext } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import { styles, textStyles } from './style.module'
import { ActivityIndicator, Checkbox, TextInput } from 'react-native-paper'
import { useTranslation } from 'react-i18next'
import { userService } from '../../../../../services'
import { popupUtils } from '../../../../../utils'
import { AuthContext } from '../../../../../contexts/AuthContext'

export default function BecomeExpertPannel() {
  const [descriptions, setDescriptions] = useState('')
  const [checkStatus, setCheckStatus] = useState(false)
  const [loading, setLoading] = useState(false)

  const { reloadUserInfo } = useContext(AuthContext)

  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <Text style={textStyles.title}>{t('promoteExpert')}</Text>
      <View style={styles.profileContainer}>
        <View style={{ ...styles.textInputContainer, alignItems: 'center' }}>
          <TextInput
            mode="outlined"
            label={t('description')}
            value={descriptions}
            disabled={!checkStatus}
            onChangeText={(text) => setDescriptions(text)}
            style={{ flex: 1 }}
            dense
          />
        </View>
        <View style={styles.checkboxContainer}>
          <Checkbox
            status={checkStatus ? 'checked' : 'unchecked'}
            onPress={() => setCheckStatus(!checkStatus)}
          />
          <Text style={{ flex: 1 }}>{t('promotionCheckboxMessage')}</Text>
        </View>
        {loading && (
          <ActivityIndicator
            style={{ alignSelf: 'center' }}
            animating
            size="large"
          />
        )}
        {!loading && (
          <TouchableOpacity
            style={styles.becomeExpertButton}
            onPress={() =>
              popupUtils.confirm.popupConfirm({
                message: t('promoteConfirmMessage'),
                callback: async () => {
                  try {
                    popupUtils.hidePopup()
                    setLoading(true)
                    await userService.promoteExpert(descriptions)
                    reloadUserInfo()
                    setLoading(false)
                    popupUtils.success.popupMessage({
                      message: t('promoteSuccess'),
                    })
                  } catch {
                    popupUtils.error.popupMessage({ message: t('promoteFailed') })
                  }
                },
              })
            }
            disabled={!checkStatus || !descriptions}
          >
            <Text style={[textStyles.button]}>{t('becomeExpert')}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}
