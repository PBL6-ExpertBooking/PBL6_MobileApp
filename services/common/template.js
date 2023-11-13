import { Popup } from 'react-native-popup-confirm-toast'
import { storeUtils } from '../../utils'
import { RootNavigate } from '../../navigation'
import { SCREEN } from '../../constants'

export async function templatePopupOnRejection(callback) {
  try {
    const result = await callback()
    return result
  } catch {
    storeUtils.clearTokens()
    Popup.show({
      type: 'success',
      iconEnabled: false,
      title: 'INFORMATION!!!',
      textBody: 'Session expired! Please login again!',
      buttonText: 'OK',
      okButtonStyle: { backgroundColor: 'blue' },
      callback: async () => {
        Popup.hide()
        RootNavigate.navigate(SCREEN.LOGIN)
      },
    })
  }
}
