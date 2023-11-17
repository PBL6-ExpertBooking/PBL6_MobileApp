import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    gap: 10,
    alignItems: 'center',
    padding: 20,
  },
  dataContainerStyle: {
    width: '100%',
  },
})
