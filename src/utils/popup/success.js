import { Popup } from 'react-native-popup-confirm-toast'
import { colors } from '../../themes'

export function popupMessage({
  title,
  showIcon = true,
  message,
  callback = () => Popup.hide(),
}) {
  Popup.show({
    type: 'success',
    title,
    iconEnabled: showIcon,
    textBody: message,
    buttonText: 'Ok',
    okButtonStyle: { backgroundColor: colors.secondary },
    callback,
    bounciness: 0,
    duration: 30,
    closeDuration: 50,
  })
}
