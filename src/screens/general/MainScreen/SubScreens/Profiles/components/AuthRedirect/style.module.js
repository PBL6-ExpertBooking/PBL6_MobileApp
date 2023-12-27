import { StyleSheet } from 'react-native'
import { colors } from '../../../../../../../themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.primaryColor,
    height: 50,
    width: '80%',
    marginTop: 20,
    justifyContent: 'center',
  },
})
