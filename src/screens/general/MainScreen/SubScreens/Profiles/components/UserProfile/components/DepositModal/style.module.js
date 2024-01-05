import { StyleSheet } from 'react-native'
import { colors } from '../../../../../../../../../themes'

export const styles = StyleSheet.create({
  modalContentContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 20,
    padding: 10,
    paddingTop: 0,
  },
  container: {
    padding: 10,
    gap: 10,
  },
  title: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 10,
    width: '100%',
    gap: 20,
  },
  input: {
    backgroundColor: colors.inputBackground,
  },
})
