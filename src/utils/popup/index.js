import { Popup } from 'react-native-popup-confirm-toast'

export * as error from './error'
export * as confirm from './confirm'
export * as success from './success'

export function hidePopup() {
  Popup.hide()
}
