import React, { useContext, useEffect, useState } from 'react'
import { View } from 'react-native'
import { styles } from './style.module'
import { useTranslation } from 'react-i18next'
import { AppContext } from '../../../../../../../contexts/AppContext'
import { Dropdown } from 'react-native-element-dropdown'
import { Text } from 'react-native'
import { TextInput } from 'react-native-paper'

export default function SearchForm({ major, setMajor, setQuery }) {
  const [text, setText] = useState('')
  const { majors } = useContext(AppContext)

  useEffect(() => {
    const refetch = setTimeout(() => setQuery(text), 150) //eslint-disable-line
    return () => clearTimeout(refetch) //eslint-disable-line
  }, [text])

  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <View style={styles.majorSelect}>
        <Text style={[styles.dropdownLabel]}>{t('major')}:</Text>
        <Dropdown
          style={[styles.dropdown]}
          value={major._id}
          data={[
            {
              _id: '',
              name: t('all'),
              descriptions: '',
              deleted: false,
              __v: 0,
            },
            ...majors,
          ]}
          labelField="name"
          valueField="_id"
          onChange={(item) => {
            setMajor(item)
          }}
          search
          searchPlaceholder={t('search')}
        />
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          mode="outlined"
          label={t('search')}
          dense
          value={text}
          onChangeText={(text) => setText(text)}
          left={<TextInput.Icon icon="magnify" />}
          right={text && <TextInput.Icon icon="close-circle-outline" />}
          style={styles.textInput}
        />
      </View>
    </View>
  )
}
