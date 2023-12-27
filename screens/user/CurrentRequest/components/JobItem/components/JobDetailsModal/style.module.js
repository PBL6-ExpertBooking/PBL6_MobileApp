import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  modalContentContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 20,
    padding: 20,
    gap: 10,
  },
  modalContainer: {
    gap: 5,
  },
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
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 20,
    marginTop: 10,
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    flexWrap: 'wrap',
  },
  description: {
    fontSize: 18,
    flexWrap: 'wrap',
  },
  infoField: {
    fontSize: 16,
  },
  addressText: {
    flex: 1,
    flexWrap: 'wrap',
    paddingLeft: 20,
  },
})
