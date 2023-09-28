import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarContainer: {
    marginBottom: 20,
    alignItems: 'center',
    gap: 5,
  },
  userProfileContainer: {
    gap: 10,
    width: '90%',
    alignItems: 'center',
  },
  textInputContainer: {
    width: '80%',
    flexDirection: 'row',
    gap: 10,
  },
  expertRegister: {
    flex: 0,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    gap: 10,
  },
})
