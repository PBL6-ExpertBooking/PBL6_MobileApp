import { Popup } from 'react-native-popup-confirm-toast'
import i18n from '../../config/i18n'
import { colors } from '../../themes'

export function popupConfirm({
  title = '',
  message = '',
  buttonText = 'OK',
  callback = () => Popup.hide(),
  cancelCallback = () => Popup.hide(),
}) {
  Popup.show({
    type: 'confirm',
    title,
    textBody: message,
    buttonText,
    confirmText: i18n.t('cancel'),
    okButtonStyle: { backgroundColor: colors.secondary },
    callback,
    cancelCallback,
    bounciness: 0,
    duration: 30,
    closeDuration: 50,
  })
}
