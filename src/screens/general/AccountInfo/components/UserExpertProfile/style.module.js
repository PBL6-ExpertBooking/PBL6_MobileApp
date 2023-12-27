import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 20,
    marginBottom: 20,
    paddingBottom: 10,
  },
  profileContainer: {
    gap: 10,
  },
  textInputContainer: {
    width: '80%',
    flexDirection: 'row',
    gap: 10,
  },
  certificateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
  },
  buttonContainer: {
    marginTop: 5,
  },
})

export const textStyles = {
  title: {
    fontSize: 15,
    fontWeight: 600,
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: 10,
  },
  certificate: {
    fontSize: 15,
    fontWeight: 600,
  },
}
