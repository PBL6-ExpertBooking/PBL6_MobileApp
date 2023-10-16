import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles, textStyles } from './style.module'
import { MajorList } from '../../utils/Majors'
import { TextInput } from 'react-native-paper'
import { Dropdown } from 'react-native-element-dropdown'

export default function RequestPost() {
  const [selectedMajor, setSelectedMajor] = useState({})
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [address, setAddress] = useState('')
  const [budget, setBudget] = useState({ min: 0, max: 50000 })

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          label="Job Title"
          value={title}
          onChangeText={(value) => setTitle(value)}
          placeholder="Job Title (maximum 20 letter)"
          maxLength={20}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          label="Description"
          multiline
          value={description}
          onChangeText={(value) => setDescription(value)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Dropdown
          style={[styles.dropdown]}
          selectedTextStyle={styles.selectedTextStyle}
          data={MajorList}
          placeholder="Major"
          maxHeight={300}
          labelField="label"
          valueField="value"
          value={selectedMajor.value}
          onChange={(item) => {
            setSelectedMajor(item)
          }}
        />
      </View>
      <View style={{ ...styles.inputContainer, flexDirection: 'row', gap: 5 }}>
        <TextInput
          mode="outlined"
          label="Min Budget"
          style={{ flex: 1 }}
          value={budget.min}
          onChangeText={(value) => setBudget({ ...budget, min: value })}
        />
        <Text style={{ alignSelf: 'center', fontWeight: 600, fontSize: 30 }}>-</Text>
        <TextInput
          mode="outlined"
          label="Max Budget"
          style={{ flex: 1 }}
          value={budget.max}
          onChangeText={(value) => setBudget({ ...budget, min: value })}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          label="Address"
          multiline
          value={address}
          onChangeText={(value) => setAddress(value)}
        />
      </View>
      <TouchableOpacity style={styles.submitButton}>
        <Text style={textStyles.submit}>Post</Text>
      </TouchableOpacity>
    </View>
  )
}
