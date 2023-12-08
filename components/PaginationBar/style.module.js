import { StyleSheet } from 'react-native'
import { colors } from '../../themes'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 5,
  },
  numberButton: {
    height: 30,
    width: 30,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberTop: {
    position: 'absolute',
    top: -35,
  },
  modalContainer: {
    width: '90%',
    backgroundColor: 'white',
    alignSelf: 'center',
    padding: 20,
    maxHeight: '50%',
    borderRadius: 10,
  },
  numberScroll: {
    width: '100%',
    justifyContent: 'center',
    gap: 20,
    marginTop: 20,
    marginBottom: 20,
  },
})
