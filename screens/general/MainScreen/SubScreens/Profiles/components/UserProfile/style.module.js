import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: 50,
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    gap: 10,
  },
  avatarContainer: {
    width: '95%',
    backgroundColor: '#D9D9D9',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 10,
    borderRadius: 10,
    marginBottom: 30,
  },
  avatarTextContainer: {},
  option: {
    width: '95%',
    flex: 0,
  },
  expertOptionColumn: {
    width: '50%',
  },
  expertOptionItem: {
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#E8DDDD',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionGroup: {
    width: '95%',
  },
  optionItem: {
    paddingLeft: 20,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#E8DDDD',
  },
  signout: {
    marginTop: 40,
    width: '95%',
    backgroundColor: '#E8DDDD',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
  },
})
