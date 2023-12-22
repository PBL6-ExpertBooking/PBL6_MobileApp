import { StyleSheet } from 'react-native'
import { colors, shadow } from '../../../themes'

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  container: {
    flex: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
    paddingTop: 10,
  },
  profileInfo: {
    width: '100%',
    alignItems: 'center',
  },
  userInfoContainer: {
    gap: 10,
    marginTop: 10,
  },
  expertInfoContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
    borderRadius: 20,
    marginTop: 30,
    margin: 5,
    padding: 10,
    paddingTop: 20,
    ...shadow.medium,
  },
  expertProfile: {
    gap: 10,
  },
  dropdown: {
    height: 45,
    width: '100%',
    borderColor: 'black',
    paddingLeft: '5%',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  textInput: {
    width: '100%',
    backgroundColor: 'white',
  },
  certificateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: colors.background,
    borderRadius: 20,
    ...shadow.light,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  statiticsContainer: {
    width: '95%',
    paddingTop: 10,
  },
  statiticsContentContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    rowGap: 10,
  },
  statiticsItem: {
    alignItems: 'center',
    width: 100,
    justifyContent: 'space-around',
  },
})

export const textStyles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: 600,
    position: 'absolute',
    alignItems: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  certificate: {
    fontSize: 15,
    fontWeight: 600,
  },
  statiticsNumber: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  itemText: {
    textAlign: 'center',
    marginHorizontal: 5,
  },
})
