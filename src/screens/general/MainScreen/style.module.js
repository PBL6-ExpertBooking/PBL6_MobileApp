import { StyleSheet } from 'react-native'
import { colors, shadow } from '../../../themes'

export const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: colors.secondary,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  iconContainer: {
    alignItems: 'center',
    width: '90%',
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 24,
    width: 24,
    margin: 0,
  },
  focusedButtonContainer: {},
  focusedIconContainer: {
    ...shadow.medium,
    borderWidth: 3,
    backgroundColor: colors.background,
    borderColor: colors.background,
    borderRadius: 10,
  },
  focusedIcon: {},
})
