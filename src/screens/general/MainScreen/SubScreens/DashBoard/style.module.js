import { StyleSheet } from 'react-native'
import { colors, device } from '../../../../../themes'

const { width } = device

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
    alignItems: 'center',
    paddingTop: 5,
  },
  cover: {
    width: width,
    height: width,
    aspectRatio: 1,
    opacity: 0.85,
    alignSelf: 'center',
  },
  topExpertPanel: {
    width: '100%',
    alignItems: 'center',
  },
  cardContainer: {
    width: '90%',
    gap: 10,
  },
  postButtonContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  postButton: {
    borderWidth: 2,
  },
})
