import { StyleSheet } from 'react-native'
import { colors, shadow } from '../../../themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  settingGroup: {
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.background,
    padding: 10,
    ...shadow.light,
  },
})

export const textStyles = StyleSheet.create({
  itemText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
})
