import { StyleSheet } from 'react-native'
import { colors } from '../../../../../../../themes'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    gap: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    paddingBottom: 10,
  },
  majorSelect: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  dropdown: {
    flex: 1,
    borderColor: 'black',
    paddingLeft: '5%',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    height: 30,
    color: colors.inputBackground,
  },
  dropdownItem: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingLeft: 20,
  },
  dropdownLabel: {
    flex: 1,
    fontSize: 17,
    fontWeight: 600,
  },
  textInputContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  textInput: {
    backgroundColor: colors.inputBackground,
    borderRadius: 20,
  },
})

export const textStyles = StyleSheet.create({
  dropdownItem: {
    fontSize: 16,
  },
})
