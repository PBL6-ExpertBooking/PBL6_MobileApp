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
    <View style={styles.optionContainer}>
      <Text style={[textStyles.optionGroupTitle]}>{t('services')}</Text>
      <View style={styles.option}>
        <TouchableOpacity
          style={styles.optionItem}
          onPress={() => RootNavigate.navigate(SCREEN.JOB_LIST)}
        >
          <View style={styles.iconContainer}>
            <IconButton icon="human-male-board-poll" size={30} style={styles.icon} />
          </View>
          <View style={styles.textContainer}>
            <Text style={[textStyles.itemText]}>{t('jobList')}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionItem}
          onPress={() => RootNavigate.navigate(SCREEN.TRANSACTION_HISTORY)}
        >
          <View style={styles.iconContainer}>
            <IconButton icon="history" size={30} style={styles.icon} />
          </View>
          <View style={styles.textContainer}>
            <Text style={[textStyles.itemText]}>{t('transactionHistory')}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionItem}
          onPress={() => RootNavigate.navigate(SCREEN.JOB_REQUEST)}
        >
          <View style={styles.iconContainer}>
            <IconButton icon="party-popper" size={30} style={styles.icon} />
          </View>
          <View style={styles.textContainer}>
            <Text style={[textStyles.itemText]}>{t('yourJobs')}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionItem}
          onPress={() => RootNavigate.navigate(SCREEN.JOB_REQUEST)}
        >
          <View style={styles.iconContainer}>
            <IconButton
              icon="credit-card-plus-outline"
              size={30}
              style={styles.icon}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={[textStyles.itemText]}>{t('withdrawal')}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
