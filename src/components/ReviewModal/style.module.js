import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  modalContainer: {
    width: '95%',
    backgroundColor: 'white',
    alignSelf: 'center',
    padding: 20,
    maxHeight: '50%',
    borderRadius: 10,
  },
  scrollContainer: {},
  reviewContainer: {
    flex: 1,
    gap: 10,
  },
})

export const itemStyles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  commentContainer: {
    flex: 1,
    alignItems: 'flex-start',
    borderRightWidth: 3,
    borderLeftWidth: 3,
    padding: 5,
  },
  ratingResult: {
    marginLeft: 'auto',
    width: 65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
})
