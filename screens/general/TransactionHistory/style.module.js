import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterContainer: {
    width: '90%',
  },
  searchBar: {},
  statusFilter: {
    paddingLeft: 10,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
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
  dataContainer: {
    flex: 1,
    width: '100%',
    borderTopColor: 'gray',
    borderTopWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  historyContainer: {
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  historyContentStyle: {
    width: '100%',
    marginTop: 10,
  },
  dropdown: {
    flex: 1,
    borderColor: 'black',
    paddingLeft: '5%',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  dropdownLabel: {
    flex: 1,
    fontSize: 17,
    fontWeight: 600,
  },
})
