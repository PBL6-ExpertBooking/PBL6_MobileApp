import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#E8DDDD',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingRight: 0,
    borderRadius: 5,
  },
  leftContainer: {},
  rightContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 0,
    position: 'absolute',
    bottom: 50,
    padding: 10,
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#FFF',
  },
})
