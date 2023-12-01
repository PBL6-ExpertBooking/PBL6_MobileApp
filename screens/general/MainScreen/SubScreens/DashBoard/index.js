import React, { useContext, useEffect, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { AuthContext } from '../../../../../contexts'
import { expertService } from '../../../../../services'
import { styles } from './style.module'
import ExpertCardItem from './components/ExpertCardItem'
import { IconButton } from 'react-native-paper'
import { ROLE, SCREEN } from '../../../../../constants'
import { RootNavigate } from '../../../../../navigation'
import { useTranslation } from 'react-i18next'

export default function DashBoard() {
  const [topExperts, setTopExperts] = useState([])
  const { user } = useContext(AuthContext)

  const { t } = useTranslation()

  useEffect(() => {
    const initTopExpert = async () => {
      const data = await expertService.getExpertPagination({ page: 1, limit: 3 })
      setTopExperts(data.pagination.experts)
    }
    initTopExpert()
  }, [])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topExpertPanel}>
        <Text
          style={{
            alignSelf: 'flex-start',
            marginLeft: '5%',
            marginBottom: 10,
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          {t('topExpert')}
        </Text>
        <View style={styles.cardContainer}>
          {topExperts.map((info, index) => (
            <ExpertCardItem key={index} info={info} />
          ))}
        </View>
      </View>
      {user?.role == ROLE.USER && (
        <TouchableOpacity
          style={styles.postButtonContainer}
          onPress={() => RootNavigate.navigate(SCREEN.REQUEST_POST)}
        >
          <IconButton icon="plus" size={40} style={styles.postButton} />
        </TouchableOpacity>
      )}
    </ScrollView>
  )
}
