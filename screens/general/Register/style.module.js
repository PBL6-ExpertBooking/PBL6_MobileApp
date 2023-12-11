import { StyleSheet } from 'react-native'
import { colors } from '../../../themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
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
  nameContainer: {
    width: '80%',
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 10,
  },
  input: {
    borderColor: '#000000',
    borderRadius: 20,
    alignSelf: 'center',
    width: '80%',
    backgroundColor: colors.inputBackground,
  },
  loginLink: {
    marginLeft: 10,
    color: '#1254FF',
    textDecorationLine: 'underline',
  },
  registerBtn: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    height: 50,
    width: '80%',
    marginTop: 20,
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
    zIndex: -100,
  },
  lngSwitch: {
    position: 'absolute',
    top: 10,
    right: '5%',
    zIndex: -1,
  },
})
