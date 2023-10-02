import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { styles } from './style.module'
import ExpertCardItem from './components/ExpertCardItem'

const SampleList = [
  {
    first_name: 'Wibu',
    last_name: 'lỏd',
    major: 'IT',
    username: 'wibu-lord',
    email: 'wibu.lord@gmail.com',
    descriptions:
      'Chúa tể wibu, ông trùm code dạo, cha đẻ react, bố của java, vị thánh html, css chúa, ACN2',
  },
  {
    first_name: 'Wibu',
    last_name: 'ko lỏd',
    major: 'IT',
    username: 'wibu-ko-lord',
    email: 'wibu.0lord@gmail.com',
    descriptions: 'Không phải thằng trên',
  },
]

export default function DashBoard() {
  const [topExperts, setTopExperts] = useState([])

  useEffect(() => {
    setTopExperts(SampleList)
  }, [])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text
        style={{
          alignSelf: 'flex-start',
          marginLeft: '5%',
          marginBottom: 10,
          fontSize: 20,
          fontWeight: 600,
        }}
      >
        Top Expert
      </Text>
      <View style={styles.cardContainer}>
        {topExperts.map((info, index) => (
          <ExpertCardItem key={index} info={info} />
        ))}
      </View>
    </ScrollView>
  )
}
