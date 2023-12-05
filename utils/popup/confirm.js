import { Popup } from 'react-native-popup-confirm-toast'
import i18n from '../../config/i18n'

export function popupConfirm({
  title = '',
  message = '',
  callback = () => {},
  cancelCallback = () => Popup.hide(),
}) {
  Popup.show({
    type: 'confirm',
    title,
    textBody: message,
    buttonText: 'OK',
    confirmText: i18n.t('cancel'),
    okButtonStyle: { backgroundColor: 'blue' },
    callback,
    cancelCallback,
    bounciness: 0,
    duration: 30,
    closeDuration: 50,
  })
}
