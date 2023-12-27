import { StyleSheet } from 'react-native'
import { colors, shadow } from '../../../themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filter: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
    gap: 40,
    paddingLeft: 40,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
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
    borderTopColor: 'gray',
    borderTopWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  dataContentContainer: {
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dataContainerStyle: {
    width: '100%',
    marginTop: 10,
  },
  jobContainer: {
    flex: 1,
  },
  paginationBar: {
    ...shadow.extraThick,
    borderWidth: 0,
  },
})
