import { Popup } from 'react-native-popup-confirm-toast'
import { storeUtils } from '../../utils'
import { RootNavigate } from '../../navigation'
import { SCREEN } from '../../constants'
import i18n from '../../config/i18n'

export async function templatePopupOnRejection(callback) {
  try {
    const result = await callback()
    return result
  } catch {
    storeUtils.clearTokens()
    Popup.show({
      type: 'success',
      iconEnabled: false,
      title: i18n.t('information'),
      textBody: i18n.t('sessionExpireMessage'),
      buttonText: 'OK',
      okButtonStyle: { backgroundColor: 'blue' },
      callback: async () => {
        Popup.hide()
        RootNavigate.navigate(SCREEN.LOGIN)
      },
    })
  }
}
