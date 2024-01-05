import { StyleSheet } from 'react-native'
import { colors, shadow } from '../../../themes'

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
    paddingVertical: 50,
  },
  textInput: {
    width: '90%',
    backgroundColor: colors.inputBackground,
    alignSelf: 'center',
  },
  imageContainer: {
    width: '90%',
    borderWidth: 2,
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 10,
  },
  imagePlaceholder: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    margin: 0,
  },
  image: {
    flex: 1,
    borderRadius: 20,
  },
  buttonContainer: {
    ...shadow.light,
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    width: '50%',
    marginVertical: 20,
  },
  activityIndicator: {
    alignSelf: 'center',
    marginVertical: 20,
  },
})

export const textStyles = StyleSheet.create({
  upload: {
    fontSize: 17,
  },
  button: {
    color: colors.textWhite,
    fontSize: 17,
    fontWeight: 'bold',
  },
})
