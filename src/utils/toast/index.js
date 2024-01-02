import { Toast } from 'react-native-popup-confirm-toast'
import { colors } from '../../themes'

export function show({
  title = false,
  message = false,
  icon = false,
  onCloseComplete = () => {},
  onOpenComplete = () => {},
}) {
  Toast.show({
    title,
    text: message,
    backgroundColor: colors.backdrop,
    timeColor: colors.primary,
    timing: 500,
    icon,
    position: 'top',
    statusBarType: 'light-content',
    onCloseComplete,
    onOpenComplete,
  })
}
