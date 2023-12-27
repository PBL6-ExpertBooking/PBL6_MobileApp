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
  valueContainer: {
    width: '80%',
    alignSelf: 'center',
  },
  input: {
    backgroundColor: colors.inputBackground,
  },
  cardInfoContainer: {
    alignItems: 'center',
  },
  cardInfoInputContainer: {
    width: '80%',
    gap: 10,
  },
  userCard: {
    gap: 10,
    marginTop: 20,
  },
  groupTitle: {
    alignSelf: 'flex-start',
    paddingLeft: '10%',
  },
  buttonContainer: {
    alignSelf: 'center',
    marginTop: 30,
  },
  button: {
    backgroundColor: colors.secondary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderRadius: 10,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    margin: 0,
  },
})

export const textStyles = StyleSheet.create({
  groupTitle: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  buttonText: {
    color: colors.textWhite,
    fontWeight: 'bold',
  },
})
