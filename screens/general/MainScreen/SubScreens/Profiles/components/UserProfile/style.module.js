import { StyleSheet } from 'react-native'
import { colors, device, shadow } from '../../../../../../../themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
    alignItems: 'center',
    gap: 10,
  },
  backgroundContainer: {
    backgroundColor: colors.primary,
    width: '100%',
    alignItems: 'center',
    paddingTop: 10,
    height: 250,
  },
  avatarContainer: {
    width: '95%',
    alignItems: 'center',
    gap: 10,
    padding: 10,
    borderRadius: 10,
    marginBottom: 30,
  },
  avatar: {
    borderWidth: 3,
    borderColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  avatarTextContainer: {
    alignItems: 'center',
  },
  backgroundButton: {
    position: 'absolute',
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderWidth: 2,
    borderRadius: 10,
    right: -50,
    top: 10,
  },
  scrollContentContainer: {
    height: '100%',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: colors.background,
    top: 0,
    zIndex: 100,
    ...shadow.medium,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  scrollContainer: {
    position: 'absolute',
    width: device.width,
    height: device.height - 260,
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  optionContainer: {
    width: '95%',
    paddingTop: 10,
  },
  option: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    rowGap: 20,
  },
  expertOptionColumn: {
    width: '50%',
  },
  expertOptionItem: {
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#E8DDDD',
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionGroup: {
    width: '95%',
  },
  optionItem: {
    width: 100,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadow.light,
    borderRadius: 20,
    backgroundColor: colors.background,
    paddingTop: 5,
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
  icon: {
    margin: 0,
  },
  iconContainer: { flex: 1, alignItems: 'center', justifyContent: 'flex-end' },
  textContainer: { flex: 1, justifyContent: 'flex-start' },
  statiticsItem: {
    alignItems: 'center',
    width: 100,
    justifyContent: 'space-around',
  },
})

export const textStyles = StyleSheet.create({
  expertOption: {
    fontSize: 18,
    fontWeight: 600,
    flexWrap: 'wrap',
    flex: 1,
    flexDirection: 'row',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  balance: {
    color: colors.surface,
  },
  itemText: {
    textAlign: 'center',
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
  },
  optionGroupTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    paddingLeft: 5,
  },
  statiticsNumber: {
    fontSize: 24,
    fontWeight: 'bold',
  },
})
