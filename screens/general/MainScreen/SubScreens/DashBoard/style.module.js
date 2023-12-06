import { Dimensions } from 'react-native'
import { StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
  },
  cover: {
    width: width,
    height: width,
    aspectRatio: 1,
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
