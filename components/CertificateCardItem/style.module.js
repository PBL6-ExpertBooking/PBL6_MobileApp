import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '95%',
  },
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    marginTop: 5,
  },
  cardTitle: {
    marginTop: 10,
    flexDirection: 'row',
    gap: 10,
  },
  titleTextContainer: {
    justifyContent: 'center',
  },
  notice: {
    position: 'absolute',
    top: -40,
    right: -10,
  },
})

export const textStyles = {}
