import { StyleSheet } from 'react-native'
import { colors } from '../../../../../../../themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
  },
  dataContentContainer: {
    flex: 1,
    gap: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.surface,
  },
  dataContainer: {
    width: '100%',
  },
})
