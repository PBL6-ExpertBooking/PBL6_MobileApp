import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { IconButton } from 'react-native-paper'
import { styles, textStyles } from './style.module'
import { SCREEN } from '../../../../../../../constants'
import { RootNavigate } from '../../../../../../../navigation'
import { useTranslation } from 'react-i18next'

export default function ExpertOption() {
  const { t } = useTranslation()

  return (
    <View style={[styles.option, { flexDirection: 'row' }]}>
      <View style={styles.expertOptionColumn}>
        <TouchableOpacity
          style={styles.expertOptionItem}
          onPress={() => RootNavigate.navigate(SCREEN.JOB_LIST)}
        >
          <IconButton
            icon="human-male-board-poll"
            size={40}
            style={{ width: 40, height: 50 }}
          />
          <Text style={[textStyles.expertOption]}>{t('jobList')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.expertOptionItem}>
          <IconButton icon="history" size={40} style={{ width: 40, height: 50 }} />
          <Text style={[textStyles.expertOption]}>History</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.expertOptionColumn}>
        <TouchableOpacity
          style={styles.expertOptionItem}
          onPress={() => RootNavigate.navigate(SCREEN.JOB_REQUEST)}
        >
          <IconButton
            icon="party-popper"
            size={40}
            style={{ width: 40, height: 50 }}
          />
          <Text style={[textStyles.expertOption]}>{t('yourJobs')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.expertOptionItem}
          onPress={() => RootNavigate.navigate(SCREEN.STATITICS)}
        >
          <IconButton icon="chart-bar" size={40} style={{ width: 40, height: 50 }} />
          <Text style={[textStyles.expertOption]}>{t('statitics')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
