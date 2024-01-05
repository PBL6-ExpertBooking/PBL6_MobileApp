import { StyleSheet } from 'react-native'
import { colors } from '../../../themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    width: '100%',
    gap: 20,
  },
  formGroup: {
    marginTop: 30,
    marginBottom: 5,
    width: '100%',
    gap: 10,
  },
  input: {
    borderColor: '#000000',
    borderRadius: 20,
    alignSelf: 'center',
    width: '80%',
    backgroundColor: colors.inputBackground,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    height: 50,
    width: '80%',
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 20,
    justifyContent: 'center',
  },
})
