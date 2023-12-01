import { StyleSheet } from 'react-native'
import { colors } from '../../../themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  formGroup: {
    marginTop: 20,
    marginBottom: 5,
    width: '100%',
    gap: 10,
  },
  input: {
    borderColor: '#000000',
    borderRadius: 20,
    alignSelf: 'center',
    width: '80%',
  },
  registerLink: {
    marginLeft: 10,
    color: '#1254FF',
    textDecorationLine: 'underline',
  },
  loginBtn: {
    alignItems: 'center',
    backgroundColor: colors.primaryColor,
    height: 50,
    width: '80%',
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 20,
    justifyContent: 'center',
  },
  googleBtn: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 50,
    width: '80%',
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 20,
    justifyContent: 'center',
    flex: 0,
    flexDirection: 'row',
    gap: 10,
  },
  bottom: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lngSwitch: {
    position: 'absolute',
    top: '5%',
    right: '5%',
  },
})
