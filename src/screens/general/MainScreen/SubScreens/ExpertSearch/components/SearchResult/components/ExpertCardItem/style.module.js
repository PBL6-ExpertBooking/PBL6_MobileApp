import { StyleSheet } from 'react-native'
import { colors, shadow } from '../../../../../../../../../themes'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 25,
    ...shadow.medium,
  },
  leftAlign: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  expertDataContainer: {
    flexDirection: 'row',
  },
  expertData: {
    flexDirection: 'row',
    paddingRight: 10,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: { margin: 0, width: 20, height: 20 },
})

export const textStyles = StyleSheet.create({
  name: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  dataText: {
    fontSize: 14,
  },
})
