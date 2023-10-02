import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 25,
  },
  leftAlign: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  modalContainer: {
    flex: 1,
    alignSelf: 'center',
    width: '90%',
    marginTop: 10,
    marginBottom: 75,
    backgroundColor: '#FFF',
  },
  scrollContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptions: {
    width: '80%',
    marginTop: 10,
    padding: 5,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
  },
})
