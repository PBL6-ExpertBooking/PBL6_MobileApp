import React, { useState, useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles, textStyles } from './style.module'
import { TextInput } from 'react-native-paper'
import { Dropdown } from 'react-native-element-dropdown'
import { AppContext } from '../../contexts/'
import { Popup } from 'react-native-popup-confirm-toast'
import { jobService } from '../../services'

export default function RequestPost() {
  const [selectedMajor, setSelectedMajor] = useState({})
  const [title, setTitle] = useState('')
  const [descriptions, setDescriptions] = useState('')
  const [address, setAddress] = useState('')
  const [budget, setBudget] = useState({ min: 0, max: 0 })

  const { majors } = useContext(AppContext)

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          label="Job Title"
          value={title}
          onChangeText={(value) => setTitle(value)}
          placeholder="Job Title (maximum 20 letter)"
          dense
          maxLength={20}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          label="Description"
          value={descriptions}
          onChangeText={(value) => setDescriptions(value)}
          dense
        />
      </View>
      <View style={styles.inputContainer}>
        <Dropdown
          style={[styles.dropdown]}
          selectedTextStyle={styles.selectedTextStyle}
          data={majors}
          placeholder="Major"
          maxHeight={300}
          labelField="name"
          valueField="_id"
          value={selectedMajor.value}
          onChange={(item) => {
            setSelectedMajor(item)
          }}
          dense
        />
      </View>
      <View style={{ ...styles.inputContainer, flexDirection: 'row', gap: 5 }}>
        <TextInput
          mode="outlined"
          label="Min Budget"
          style={{ flex: 1 }}
          value={budget.min.toString()}
          onChangeText={(value) => setBudget({ ...budget, min: value })}
          dense
        />
        <Text style={{ alignSelf: 'center', fontWeight: 600, fontSize: 30 }}>-</Text>
        <TextInput
          mode="outlined"
          label="Max Budget"
          style={{ flex: 1 }}
          value={budget.max.toString()}
          onChangeText={(value) => setBudget({ ...budget, max: value })}
          dense
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          label="Address"
          value={address}
          onChangeText={(value) => setAddress(value)}
          dense
        />
      </View>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() =>
          Popup.show({
            type: 'confirm',
            title: 'Confirmation!!!',
            textBody: 'Are you sure to post this job request ?',
            buttonText: 'Post',
            okButtonStyle: { backgroundColor: 'blue' },
            callback: async () => {
              try {
                await jobService.addJobRequest({
                  major_id: selectedMajor._id,
                  title,
                  descriptions,
                  address,
                  budget,
                })
                Popup.show({
                  type: 'success',
                  title: 'Success!',
                  textBody: 'Your job request has been posted!!!',
                })
              } catch {
                Popup.show({
                  type: 'danger',
                  title: 'Failure!',
                  textBody: 'Your job request has not been posted!!!',
                })
              }
            },
            cancelCallback: () => {
              Popup.hide()
            },
          })
        }
      >
        <Text style={textStyles.submit}>Post</Text>
      </TouchableOpacity>
    </View>
  )
}
