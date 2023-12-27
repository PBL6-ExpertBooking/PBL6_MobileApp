import { StyleSheet } from 'react-native'
import { colors } from '../../../themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    width: '100%',
  },
  scrollContentContainer: {
    gap: 10,
    justifyContent: 'center',
    paddingVertical: 10,
  },
  cardGroupContainer: {
    width: '100%',
    gap: 10,
  },
  buttonNewCard: {
    width: '70%',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
  },
  buttonEdit: {
    paddingHorizontal: 10,
    alignSelf: 'center',
    backgroundColor: colors.secondary,
    borderRadius: 20,
  },
  innerButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    margin: 0,
  },
  formContainer: {
    alignSelf: 'center',
    width: '90%',
    gap: 5,
  },
  input: {
    backgroundColor: colors.inputBackground,
  },
  formActionContainer: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 20,
  },
  button: {
    borderRadius: 20,
    paddingVertical: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  doneButton: {
    backgroundColor: colors.secondary,
  },
  cancelButton: {
    backgroundColor: colors.danger,
  },
})

export const textStyles = StyleSheet.create({
  buttonText: {
    color: colors.textWhite,
    fontSize: 16,
    fontWeight: 'bold',
  },
})
