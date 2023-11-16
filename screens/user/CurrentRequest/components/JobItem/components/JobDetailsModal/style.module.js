import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  modalContentContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 20,
    padding: 10,
    paddingTop: 0,
  },
  modalContainer: {},
  modalTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 30,
  },
  jobDescription: {
    color: 'black',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 0,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  jobInfoField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusContainer: {
    flexDirection: 'row',
    gap: 5,
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
  major: {},
  price: { color: 'gray' },
  infoField: { fontSize: 17 },
  addressText: {
    maxWidth: 200,
  },
})
