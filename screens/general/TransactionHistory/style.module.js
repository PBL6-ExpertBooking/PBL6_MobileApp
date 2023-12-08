import { StyleSheet } from 'react-native'
import { colors } from '../../../themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusFilter: {
    paddingLeft: 10,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  datePicker: {
    width: '90%',
    height: 80,
    flexDirection: 'row',
    gap: 10,
  },
  date: {
    backgroundColor: colors.inputBackground,
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
    color: colors.inputBackground,
  },
  dropdownLabel: {
    flex: 1,
    fontSize: 17,
    fontWeight: 600,
  },
  paginationBar: {
    marginTop: 'auto',
    borderTopWidth: 2,
  },
})
