import { StyleSheet } from 'react-native'
import { colors, shadow } from '../../../../../themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: colors.background,
    ...shadow.light,
    marginBottom: 5,
  },
  paginationBar: {
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  },
})

export const textStyles = StyleSheet.create({
  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },
})
