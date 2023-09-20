import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style.module'
import { SCREEN } from '../../constants'
import Pana from '../../assets/Experts-pana.png'
import Logo from '../../assets/logo.jpg'

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <View style={styles.welcomeText}>
        <Text style={{ fontSize: 32 }}>Welcome to</Text>
        <Text style={{ fontSize: 32, fontWeight: 600 }}>
          Expert-Hiring platform!!!
        </Text>
      </View>
      <Image source={Pana} style={styles.cover} resizeMode="contain" />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate(SCREEN.LOGIN)
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 600 }}>TO LOGIN</Text>
      </TouchableOpacity>
    </View>
  )
}
