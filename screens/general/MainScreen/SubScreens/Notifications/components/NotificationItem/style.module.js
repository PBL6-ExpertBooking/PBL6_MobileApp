import { StyleSheet } from 'react-native'
import { colors } from '../../../../../../../themes'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.background,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    gap: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  clockIcon: {
    margin: 0,
    alignSelf: 'center',
    width: 15,
    height: 15,
  },
})

export const textStyles = StyleSheet.create({
  username: {
    fontWeight: 'bold',
  },
  date: {
    fontSize: 11,
    fontWeight: '100',
    color: 'gray',
  },
})
