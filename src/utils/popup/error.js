import { Popup } from 'react-native-popup-confirm-toast'
import { colors } from '../../themes'

export function popupMessage({
  title = '',
  message,
  showIcon = true,
  callback = () => Popup.hide(),
}) {
  Popup.show({
    type: 'danger',
    iconEnabled: showIcon,
    title: title,
    textBody: message,
    buttonText: 'Ok',
    okButtonStyle: { backgroundColor: colors.secondary },
    callback,
    bounciness: 0,
    duration: 30,
    closeDuration: 50,
  })
}
