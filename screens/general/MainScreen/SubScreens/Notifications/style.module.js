import { StyleSheet } from 'react-native'
import { colors, shadow } from '../../../../../themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: colors.background,
    ...shadow.light,
  },
  dataContainer: {
    flex: 1,
    width: '100%',
  },
  dataContentContainer: {
    flex: 1,
    gap: 10,
  },
})

export const textStyles = StyleSheet.create({
  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },
})
