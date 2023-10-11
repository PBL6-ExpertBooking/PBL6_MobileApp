import { StyleSheet } from 'react-native'
import { colors } from '../../themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: 10,
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
})

export const textStyles = {
  submit: {
    fontSize: 17,
    fontWeight: 600,
  },
}
