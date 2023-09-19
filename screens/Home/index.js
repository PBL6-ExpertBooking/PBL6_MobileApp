import { Button, Image, Text, View } from 'react-native'
import { styles } from './style.module'
import { colors } from '../../themes'
import Pana from '../../assets/Experts-pana.png'

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Welcome to Expert-Hiring platform!!!</Text>
      <Image source={Pana} />
      <Button
        title="To login"
        color={colors.primaryColor}
        onPress={() => {
          navigation.navigate('Login')
        }}
      />
    </View>
  )
}
