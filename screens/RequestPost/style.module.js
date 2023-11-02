import { StyleSheet } from 'react-native'
import { colors } from '../../themes'

export const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: '#fff' },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingTop: 50,
  },
  containerStyle: {
    flex: 1,
    height: '100%',
  },
  inputContainer: {
    width: '80%',
  },
  submitButton: {
    backgroundColor: colors.primaryColor,
    width: '80%',
    height: 50,
    borderRadius: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdown: {
    height: 40,
    borderColor: 'black',
    paddingLeft: '5%',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    width: '100%',
  },
  addressContainer: {
    width: '80%',
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 10,
    padding: 20,
    gap: 10,
  },
})

export const textStyles = {
  submit: {
    fontSize: 17,
    fontWeight: 600,
  },
}
