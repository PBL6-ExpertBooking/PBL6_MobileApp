import { StyleSheet } from 'react-native'
import { colors } from '../../../themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
    alignItems: 'center',
    paddingTop: 10,
  },
  avatarContainer: {
    marginBottom: 20,
    alignItems: 'center',
    gap: 5,
  },
  expertRegister: {
    flex: 0,
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'center',
    bottom: 10,
    gap: 10,
  },
  wrapper: {
    backgroundColor: colors.surface,
  },
})
