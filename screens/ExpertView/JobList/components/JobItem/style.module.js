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
  jobInfoField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export const textStyles = {
  infoField: { fontSize: 17 },
}
