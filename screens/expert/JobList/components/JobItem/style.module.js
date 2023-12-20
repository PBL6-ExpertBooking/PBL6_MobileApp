import { StyleSheet } from 'react-native'
import { shadow, colors } from '../../../../../themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 20,
    gap: 20,
  },
  avatarContainer: {
    width: 40,
  },
  jobDataContainer: {
    backgroundColor: colors.background,
    ...shadow.medium,
    borderWidth: 0,
    borderRadius: 2,
    flex: 1,
    marginTop: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    margin: 2,
    flex: 1,
    padding: 10,
    flexDirection: 'row',
  },
  content: {
    gap: 5,
    padding: 5,
    marginLeft: 2,
    marginRight: 2,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: 'lightgray',
  },
  dataContainer: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 30,
    justifyContent: 'space-between',
  },
  btnGroup: {
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
  },
  button: {
    height: 50,
    width: 50,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 5,
    backgroundColor: colors.backdrop,
    margin: 1,
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export const textStyles = StyleSheet.create({
  infoField: { fontSize: 17 },
  addressText: {
    maxWidth: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
  },
  price: {
    fontSize: 17,
    paddingTop: 2,
    alignSelf: 'flex-end',
    fontWeight: 'bold',
  },
  fieldName: {
    fontWeight: 'bold',
  },
})

export const modalStyles = StyleSheet.create({
  modalContentContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 20,
    padding: 20,
    gap: 10,
  },
  modalContainer: {
    gap: 5,
  },
  modalTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  jobDescription: {
    color: 'black',
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  jobInfoField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnContainer: {
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 20,
    marginTop: 10,
  },
})

export const modalTextStyle = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    flexWrap: 'wrap',
  },
  description: {
    fontSize: 18,
    flexWrap: 'wrap',
  },
  infoField: {
    fontSize: 16,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
})
