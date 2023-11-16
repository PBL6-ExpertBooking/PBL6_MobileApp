import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  modalContentContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 20,
    padding: 10,
    paddingTop: 20,
    gap: 20,
  },
  modalContainer: {},
  modalTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  avatarContainer: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    padding: 10,
    gap: 10,
  },
  starRatingContainer: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 10,
    width: '100%',
    gap: 20,
  },
})

export const textStyles = StyleSheet.create({
  title: { fontSize: 18, fontWeight: 700 },
})
