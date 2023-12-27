import { StyleSheet } from 'react-native'
import { colors } from '../../../themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
  },
  certListView: {
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  certListStyle: {
    width: '90%',
  },
  modalContainer: {
    width: '100%',
    height: '100%',
  },
  addCertBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    marginTop: 10,
  },
})
