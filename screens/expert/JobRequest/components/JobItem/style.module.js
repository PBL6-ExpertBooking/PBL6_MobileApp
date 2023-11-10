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
  },
  jobDescription: {
    color: 'black',
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  jobInfoField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnContainer: {
    width: '80%',
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 20,
    marginTop: 20,
  },
})

export const textStyles = StyleSheet.create({
  infoField: { fontSize: 17 },
  addressText: {
    maxWidth: 200,
  },
})
