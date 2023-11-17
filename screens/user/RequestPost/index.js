import React, { useState, useContext, useEffect } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles, textStyles } from './style.module'
import { ActivityIndicator, TextInput } from 'react-native-paper'
import { Dropdown } from 'react-native-element-dropdown'
import { AppContext } from '../../../contexts'
import { Popup } from 'react-native-popup-confirm-toast'
import { jobService, provinceService } from '../../../services'

export default function RequestPost() {
  const [selectedMajor, setSelectedMajor] = useState({})
  const [title, setTitle] = useState('')
  const [descriptions, setDescriptions] = useState('')
  const [price, setPrice] = useState('')
  const [city, setCity] = useState(null)
  const [district, setDistrict] = useState(null)
  const [ward, setWard] = useState(null)
  const [details, setDetails] = useState('')

  const [districtList, setDistrictList] = useState([])
  const [wardList, setWardList] = useState([])

  const [loading, setLoading] = useState(false)

  const { majors, provinces } = useContext(AppContext)

  useEffect(() => {
    if (district) setDistrict(null)
    if (ward) setWard(null)
    const getDistrictList = async () => {
      const response = await provinceService.getDistricts({
        provinceCode: city.code,
      })
      setDistrictList(response)
    }
    if (city?.code) getDistrictList()
  }, [city?.code])

  useEffect(() => {
    const getWardList = async () => {
      const response = await provinceService.getWards({
        districtCode: district.code,
      })
      setWardList(response)
    }
    if (district?.code) getWardList()
  }, [district?.code])

  return (
    <View style={styles.wrapper}>
      <ScrollView
        contentContainerStyle={styles.container}
        style={styles.containerStyle}
      >
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
        <View style={styles.inputContainer}>
          <TextInput
            mode="outlined"
            label="Price"
            value={price}
            onChangeText={(value) => setPrice(value)}
            dense
          />
        </View>
        <View style={styles.addressContainer}>
          <Text
            style={{
              position: 'absolute',
              top: -13,
              left: 10,
              backgroundColor: 'white',
            }}
          >
            Address
          </Text>
          <Dropdown
            style={[styles.dropdown]}
            selectedTextStyle={styles.selectedTextStyle}
            data={provinces}
            placeholder="Province"
            maxHeight={300}
            labelField="name"
            valueField="code"
            value={city}
            onChange={(item) => setCity({ code: item.code, name: item.name })}
            dense
          />
          <Dropdown
            style={[styles.dropdown]}
            selectedTextStyle={styles.selectedTextStyle}
            data={districtList}
            placeholder="District"
            maxHeight={300}
            labelField="name"
            valueField="code"
            value={district}
            onChange={(item) => setDistrict({ code: item.code, name: item.name })}
            dense
          />
          <Dropdown
            style={[styles.dropdown]}
            selectedTextStyle={styles.selectedTextStyle}
            data={wardList}
            placeholder="Ward"
            maxHeight={300}
            labelField="name"
            valueField="code"
            value={ward}
            onChange={(item) => setWard({ code: item.code, name: item.name })}
            dense
          />
          <View style={{ width: '100%' }}>
            <TextInput
              mode="outlined"
              label="Other Details"
              value={details}
              onChangeText={(value) => setDetails(value)}
              dense
            />
          </View>
        </View>
        {loading && <ActivityIndicator animating size="large" />}
        {!loading && (
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
                  setLoading(true)
                  Popup.hide()
                  try {
                    await jobService.addJobRequest({
                      major_id: selectedMajor._id,
                      title,
                      descriptions,
                      address: { city, district, ward, other_detail: details },
                      price,
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
                  } finally {
                    setLoading(false)
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
        )}
      </ScrollView>
    </View>
  )
}
