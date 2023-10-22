import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style.module'
import { SCREEN } from '../../constants'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../contexts'
import { expertPana, logo } from '../../assets'

export default function Home({ navigation }) {
  const { user } = useContext(AuthContext)

  useEffect(() => {
    if (user?._id) navigation.navigate(SCREEN.DASHBOARD)
  }, [user?._id])

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.welcomeText}>
        <Text style={{ fontSize: 32 }}>Welcome to</Text>
        <Text style={{ fontSize: 32, fontWeight: 600 }}>
          Expert-Hiring platform!!!
        </Text>
      </View>
      <Image source={expertPana} style={styles.cover} resizeMode="contain" />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate(SCREEN.LOGIN)
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 600 }}>TO LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate(SCREEN.DASHBOARD)
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 600 }}>DASHBOARD</Text>
      </TouchableOpacity>
    </View>
  )
}
