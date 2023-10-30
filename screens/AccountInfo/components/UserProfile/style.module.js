import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  textInputContainer: {
    width: '80%',
    flexDirection: 'row',
    gap: 10,
  },
  expertRegister: {
    flex: 0,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    gap: 10,
  },
  buttonContainer: {
    width: '80%',
    marginTop: 10,
    marginBottom: 10,
  },
  dropdown: {
    height: 45,
    width: '100%',
    borderColor: 'black',
    paddingLeft: '5%',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  textInput: {
    width: '100%',
    backgroundColor: 'white',
  },
  editButton: {
    backgroundColor: '#F0F8FF',
  },
})
