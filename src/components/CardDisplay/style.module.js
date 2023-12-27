import { StyleSheet } from 'react-native'
import { colors } from '../../themes'

export const styles = StyleSheet.create({
  cardContainer: {
    width: 300,
    height: 200,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  cardBG: {
    width: '100%',
    height: '100%',
  },
  cardTextContainer: {
    position: 'absolute',
    zIndex: 10,
    width: 300,
    height: 200,
    justifyContent: 'flex-end',
    padding: 5,
    gap: 5,
  },
  visaLogo: {
    position: 'absolute',
    width: 55,
    height: 35,
    top: 10,
    right: 5,
    opacity: 0.8,
  },
})

export const textStyles = StyleSheet.create({
  cardText: {
    color: colors.textWhite,
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.8,
  },
  cardNumber: {
    marginBottom: 10,
    marginLeft: 80,
  },
  ownerName: {
    marginBottom: 20,
    marginLeft: 15,
  },
  bankName: {
    marginBottom: 10,
    alignSelf: 'flex-end',
    marginRight: 10,
  },
})
