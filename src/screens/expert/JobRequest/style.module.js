import { StyleSheet } from 'react-native'
import { colors, shadow } from '../../../themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailNavigator: {
    flexDirection: 'row',
  },
  textStyle: {
    color: 'black',
    fontSize: 16,
    fontWeight: 700,
  },
  dropdown: {
    flex: 1,
    height: 30,
    borderColor: 'black',
    paddingLeft: '5%',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  dataContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.surface,
  },
  dataContentContainer: {
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dataContainerStyle: {
    width: '100%',
  },
  jobContainer: {
    flex: 1,
  },
  paginationBar: {
    ...shadow.extraThick,
    borderWidth: 0,
  },
})
