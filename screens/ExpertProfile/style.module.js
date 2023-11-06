import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
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
    backgroundColor: '#F9F9F9',
    borderRadius: 20,
    marginTop: 15,
    padding: 10,
    paddingTop: 20,
  },
  expertProfile: {
    gap: 10,
  },
  descriptions: {
    width: '80%',
    marginTop: 10,
    padding: 5,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
  },
  textInputContainer: {
    width: '80%',
    flexDirection: 'row',
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
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
  },
})

export const textStyles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: 600,
    position: 'absolute',
    left: '5%',
    top: -10,
  },
  certificate: {
    fontSize: 15,
    fontWeight: 600,
  },
})
