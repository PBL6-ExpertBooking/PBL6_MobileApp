import { Popup } from 'react-native-popup-confirm-toast'

export function popupMessage({ title, showIcon, message }) {
  Popup.show({
    type: 'success',
    title,
    iconEnabled: showIcon,
    textBody: message,
    bounciness: 0,
    duration: 30,
    closeDuration: 50,
  })
}
