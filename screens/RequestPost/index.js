import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles, textStyles } from './style.module'
import { MajorList } from '../../utils/Majors'
import { TextInput } from 'react-native-paper'
import { PaperSelect } from 'react-native-paper-select'

export default function RequestPost() {
  const [selectedMajor, setSelectedMajor] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          label="Job Title"
          placeholder="Job Title (maximum 20 letter)"
          maxLength={20}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput mode="outlined" label="Description" multiline />
      </View>
      <View style={styles.inputContainer}>
        <PaperSelect
          label="Major"
          textInputMode="outlined"
          arrayList={MajorList}
          value={selectedMajor}
          selectedArrayList={[]}
          onSelection={(value) => setSelectedMajor(value.text)}
          multiEnable={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput mode="outlined" label="Address" multiline />
      </View>
      <TouchableOpacity style={styles.submitButton}>
        <Text style={textStyles.submit}>Post</Text>
      </TouchableOpacity>
    </View>
  )
}
