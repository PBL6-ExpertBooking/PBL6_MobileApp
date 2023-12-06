import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  filterContainer: {
    width: '90%',
  },
  searchBar: {},
  buttonContainer: {
    width: '90%',
    marginTop: 20,
    marginBottom: 10,
  },
  segmentedButtons: {
    borderRadius: 0,
  },
  datePicker: {
    width: '90%',
    height: 80,
    flexDirection: 'row',
    gap: 10,
  },
  pickerContainer: {
    flex: 1,
  },
  historyContainer: {
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
