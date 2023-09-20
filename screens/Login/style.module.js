import { StyleSheet } from 'react-native'
import { colors } from '../../themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  formGroup: {
    width: '100%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,
    padding: 10,
    alignSelf: 'center',
    width: '80%',
  },
  title: {
    fontSize: 100,
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
    marginTop: 20,
    justifyContent: 'center',
  },
  bottom: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
})
