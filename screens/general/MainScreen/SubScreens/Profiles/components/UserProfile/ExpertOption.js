import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { IconButton } from 'react-native-paper'
import { styles } from './style.module'
import { SCREEN } from '../../../../../../../constants'
import { RootNavigate } from '../../../../../../../navigation'

export default function ExpertOption() {
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
          <Text style={{ fontSize: 18, fontWeight: 600 }}>Job List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.expertOptionItem}>
          <IconButton icon="history" size={40} style={{ width: 40, height: 50 }} />
          <Text style={{ fontSize: 18, fontWeight: 600 }}>History</Text>
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
          <Text style={{ fontSize: 18, fontWeight: 600 }}>Accepter Jobs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.expertOptionItem}
          onPress={() => RootNavigate.navigate(SCREEN.STATITICS)}
        >
          <IconButton icon="chart-bar" size={40} style={{ width: 40, height: 50 }} />
          <Text style={{ fontSize: 18, fontWeight: 600 }}>Statitics</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
