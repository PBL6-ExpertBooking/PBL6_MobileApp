import { StyleSheet } from 'react-native'
import { colors } from '../../../themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 20,
    width: 50,
    height: 50,
  },
  cover: {
    height: '25%',
  },
  welcomeText: {
    flex: 0,
    alignItems: 'center',
    marginBottom: 50,
  },
})
