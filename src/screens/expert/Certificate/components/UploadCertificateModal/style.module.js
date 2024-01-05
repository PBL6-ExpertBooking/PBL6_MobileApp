import { StyleSheet } from 'react-native'
import { colors } from '../../../../../themes'

export const styles = StyleSheet.create({
  container: {
    width: '95%',
    backgroundColor: 'white',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 10,
  },
  modalStyle: {},
  title: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  certificateUpload: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    marginBottom: 20,
  },
  previewImage: {
    height: 200,
    borderRadius: 10,
  },
  uploadContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  formContainer: {
    gap: 10,
  },
  dropdown: {
    height: 40,
    borderColor: 'black',
    paddingLeft: '5%',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    backgroundColor: colors.inputBackground,
  },
  inputContainer: {
    margin: 0,
    padding: 0,
  },
  input: {
    backgroundColor: colors.inputBackground,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 20,
    gap: 30,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
})

export const textStyles = StyleSheet.create({
  title: {
    fontSize: 17,
    fontWeight: 700,
  },
  upload: {
    fontSize: 17,
    fontWeight: 700,
  },
})
