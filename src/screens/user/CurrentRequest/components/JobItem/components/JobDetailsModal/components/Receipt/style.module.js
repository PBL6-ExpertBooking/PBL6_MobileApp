import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 3,
  },
  infoField: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
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
