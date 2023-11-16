import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: { margin: 5 },
  navBtn: {
    borderRadius: 0,
    flex: 1,
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
