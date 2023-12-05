import { Popup } from 'react-native-popup-confirm-toast'

export function popupMessage({ title = '', message, showIcon = true }) {
  Popup.show({
    type: 'danger',
    iconEnabled: showIcon,
    title: title,
    textBody: message,
    bounciness: 0,
    duration: 30,
    closeDuration: 50,
  })
}
