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
    timing: 200,
    icon,
    position: 'bottom',
    statusBarType: 'dark-content',
    onCloseComplete,
    onOpenComplete,
  })
}
