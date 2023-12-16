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
  cardContainer: {
    width: 300,
    height: 200,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  cardBG: {
    width: '100%',
    height: '100%',
  },
  cardTextContainer: {
    position: 'absolute',
    zIndex: 10,
    width: 300,
    height: 200,
    justifyContent: 'flex-end',
    padding: 5,
    gap: 5,
  },
  visaLogo: {
    position: 'absolute',
    width: 55,
    height: 35,
    top: 10,
    right: 5,
    opacity: 0.8,
  },
})

export const textStyles = StyleSheet.create({
  buttonText: {
    color: colors.textWhite,
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardText: {
    color: 'lightgray',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardNumber: {
    marginBottom: 10,
    marginLeft: 80,
  },
  ownerName: {
    marginBottom: 20,
    marginLeft: 15,
  },
  bankName: {
    marginBottom: 10,
    alignSelf: 'flex-end',
    marginRight: 20,
  },
})
