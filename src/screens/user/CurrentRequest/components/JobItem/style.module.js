import { StyleSheet } from 'react-native'
import { colors, shadow } from '../../../../../themes'

export const styles = StyleSheet.create({
  container: {
    ...shadow.light,
    width: '100%',
    backgroundColor: colors.background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
    borderTopWidth: 0.2,
  },
  textContainer: {},
  rightPannel: {},
})

export const textStyles = StyleSheet.create({
  title: { fontSize: 18, fontWeight: 700 },
  major: {},
  price: { color: 'gray' },
  infoField: { fontSize: 17 },
  addressText: {
    maxWidth: 200,
  },
})
