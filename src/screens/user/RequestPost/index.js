import React, { useState, useContext, useEffect } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles, textStyles } from './style.module'
import { ActivityIndicator, TextInput } from 'react-native-paper'
import { Dropdown } from 'react-native-element-dropdown'
import { AppContext } from '../../../contexts'
import { provinceService } from '../../../services'
import { useTranslation } from 'react-i18next'
import { popupUtils } from '../../../utils'
import * as action from './action'
import { RootNavigate } from '../../../navigation'
import { SCREEN } from '../../../constants'

export default function RequestPost({ route }) {
  const { job, isEdit } = route.params

  const [selectedMajor, setSelectedMajor] = useState(isEdit ? job.major : {})
  const [title, setTitle] = useState(isEdit ? job.title : '')
  const [descriptions, setDescriptions] = useState(isEdit ? job.descriptions : '')
  const [price, setPrice] = useState(isEdit ? job.price.toString() : '')
  const [city, setCity] = useState(isEdit ? job.address.city : null)
  const [district, setDistrict] = useState(isEdit ? job.address.district : null)
  const [ward, setWard] = useState(isEdit ? job.address.ward : null)
  const [details, setDetails] = useState(isEdit ? job.address.other_detail : '')

  const [districtList, setDistrictList] = useState([])
  const [wardList, setWardList] = useState([])

  const [loading, setLoading] = useState(false)

  const { majors, provinces } = useContext(AppContext)

  const { t } = useTranslation()

  const validate = () => {
    if (!title) {
      popupUtils.error.popupMessage({ message: t('titleNotFilled') })
      return false
    }
    if (!selectedMajor._id) {
      popupUtils.error.popupMessage({ message: t('majorNotFilled') })
      return false
    }
    if (!price) {
      popupUtils.error.popupMessage({ message: t('priceNotFilled') })
      return false
    }
    return true
  }

  useEffect(() => {
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
            label={t('title')}
            value={title}
            onChangeText={(value) => setTitle(value)}
            placeholder="Job Title (maximum 20 letter)"
            style={styles.input}
            dense
            maxLength={20}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            mode="outlined"
            label={t('description')}
            value={descriptions}
            onChangeText={(value) => setDescriptions(value)}
            style={styles.input}
            dense
          />
        </View>
        <View style={styles.inputContainer}>
          <Dropdown
            style={[styles.dropdown]}
            selectedTextStyle={styles.selectedTextStyle}
            data={majors}
            placeholder={t('major')}
            maxHeight={300}
            labelField="name"
            valueField="_id"
            value={selectedMajor}
            onChange={(item) => {
              setSelectedMajor(item)
            }}
            dense
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            mode="outlined"
            label={t('price')}
            keyboardType="numeric"
            value={price}
            onChangeText={(value) => setPrice(value)}
            style={styles.input}
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
            {t('address')}
          </Text>
          <Dropdown
            style={[styles.dropdown]}
            selectedTextStyle={styles.selectedTextStyle}
            data={provinces}
            placeholder={t('city')}
            maxHeight={300}
            labelField="name"
            valueField="code"
            value={city}
            onChange={(item) => {
              setCity({ code: item.code, name: item.name })
              setDistrict(null)
              setWard(null)
            }}
            dense
          />
          {districtList.length > 0 && city?.code && (
            <Dropdown
              style={[styles.dropdown]}
              selectedTextStyle={styles.selectedTextStyle}
              data={districtList}
              placeholder={t('district')}
              maxHeight={300}
              labelField="name"
              valueField="code"
              value={district}
              onChange={(item) => {
                setDistrict({ code: item.code, name: item.name })
                setWard(null)
              }}
              dense
            />
          )}
          {wardList.length > 0 && district?.code && (
            <Dropdown
              style={[styles.dropdown]}
              selectedTextStyle={styles.selectedTextStyle}
              data={wardList}
              placeholder={t('ward')}
              maxHeight={300}
              labelField="name"
              valueField="code"
              value={ward}
              onChange={(item) => setWard({ code: item.code, name: item.name })}
              dense
            />
          )}
          <View style={{ width: '100%' }}>
            <TextInput
              mode="outlined"
              label={t('otherDetail')}
              value={details}
              onChangeText={(value) => setDetails(value)}
              style={styles.input}
              dense
            />
          </View>
        </View>
        {loading && <ActivityIndicator animating size="large" />}
        {!loading && (
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              if (validate()) {
                if (isEdit) {
                  action.edit({
                    id: job._id,
                    selectedMajor,
                    title,
                    descriptions,
                    price,
                    city,
                    district,
                    ward,
                    details,
                    setLoading,
                    completeCallback: () => RootNavigate.navigate(SCREEN.DASHBOARD),
                  })
                } else
                  action.post({
                    selectedMajor,
                    title,
                    descriptions,
                    price,
                    city,
                    district,
                    ward,
                    details,
                    setLoading,
                    completeCallback: () => RootNavigate.navigate(SCREEN.DASHBOARD),
                  })
              }
            }}
          >
            <Text style={textStyles.submit}>{isEdit ? t('edit') : t('post')}</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  )
}
