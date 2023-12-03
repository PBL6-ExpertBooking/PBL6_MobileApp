import React, { useCallback, useContext, useState } from 'react'
import { Popup } from 'react-native-popup-confirm-toast'
import { View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { styles } from './style.module'
import { AuthContext } from '../../../../../contexts'
import { Dropdown } from 'react-native-element-dropdown'
import { GENDER } from '../../../../../constants'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { datetimeHelper } from '../../../../../utils'
import DropdownItem from '../../../../../components/DropdownItem'
import GenderIcon from '../../../../../components/GenderIcon'
import { userService } from '../../../../../services'
import AddressSelectionModal from './components/AddressSelectionModal'
import { useTranslation } from 'react-i18next'

export default function UserProfile() {
  const { user, setUser } = useContext(AuthContext)

  const [isEdit, setEdit] = useState(false)
  const [userInfo, setUserInfo] = useState(user)
  const [pickerVisibility, setPickerVisibility] = useState(false)
  const [addressModalVisibility, setAddressModalVisibility] = useState(false)

  const showPicker = useCallback(() => setPickerVisibility(true), [])
  const hidePicker = useCallback(() => setPickerVisibility(false), [])

  const showAddressSelect = useCallback(() => setAddressModalVisibility(true), [])
  const hideAddressSelect = useCallback(() => setAddressModalVisibility(false), [])

  const { t } = useTranslation()

  const setCity = useCallback(
    (city) =>
      setUserInfo((userInfo) => ({
        ...userInfo,
        address: { ...userInfo.address, city },
      })),
    [],
  )

  const setDistrict = useCallback(
    (district) =>
      setUserInfo((userInfo) => ({
        ...userInfo,
        address: { ...userInfo.address, district },
      })),
    [],
  )

  const setWard = useCallback(
    (ward) =>
      setUserInfo((userInfo) => ({
        ...userInfo,
        address: { ...userInfo.address, ward },
      })),
    [],
  )

  const { city, district, ward } = userInfo.address

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          mode="outlined"
          label={t('lastName')}
          value={userInfo.last_name}
          editable={isEdit}
          style={{ flex: 1, ...styles.textInput }}
          dense
          onChangeText={(text) =>
            setUserInfo((userInfo) => ({ ...userInfo, last_name: text }))
          }
        />
        <TextInput
          mode="outlined"
          label={t('firstName')}
          value={userInfo.first_name}
          editable={isEdit}
          style={{ flex: 1, ...styles.textInput }}
          dense
          onChangeText={(text) =>
            setUserInfo((userInfo) => ({ ...userInfo, first_name: text }))
          }
        />
      </View>
      <View style={styles.textInputContainer}>
        <Dropdown
          style={[styles.dropdown]}
          value={userInfo.gender}
          data={GENDER.map((item) => ({ ...item, label: t(item.label) }))}
          placeholder={t('gender')}
          maxHeight={300}
          labelField="label"
          valueField="value"
          disable={!isEdit}
          renderLeftIcon={() => (
            <GenderIcon
              value={userInfo.gender}
              style={{ width: 20, marginLeft: 0, marginRight: 10 }}
            />
          )}
          renderItem={(item) => <DropdownItem item={item} />}
          onChange={(item) => {
            setUserInfo((userInfo) => ({ ...userInfo, gender: item.value }))
          }}
        />
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          mode="outlined"
          label={t('dateOfBirth')}
          value={userInfo.DoB}
          editable={false}
          style={styles.textInput}
          right={
            <TextInput.Icon
              icon="calendar-edit"
              disabled={!isEdit}
              onPress={showPicker}
            />
          }
          dense
        />
        <DateTimePickerModal
          isVisible={pickerVisibility}
          mode="date"
          date={new Date()}
          onCancel={hidePicker}
          onConfirm={(date) => {
            hidePicker()
            setUserInfo({
              ...userInfo,
              DoB: datetimeHelper.getFormatedStringfromISODate(date),
            })
          }}
        />
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          mode="outlined"
          label="email"
          value={userInfo.email}
          editable={false}
          style={styles.textInput}
          dense
          onChangeText={(text) =>
            setUserInfo((userInfo) => ({ ...userInfo, email: text }))
          }
        />
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          mode="outlined"
          label={t('phoneNumber')}
          value={userInfo.phone}
          editable={isEdit}
          style={styles.textInput}
          dense
          onChangeText={(text) =>
            setUserInfo((userInfo) => ({ ...userInfo, phone: text }))
          }
        />
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          mode="outlined"
          label={t('address')}
          value={`${city?.name} - ${district?.name} - ${ward?.name}`}
          editable={false}
          style={styles.textInput}
          right={
            <TextInput.Icon
              icon="map-marker"
              disabled={!isEdit}
              onPress={showAddressSelect}
            />
          }
          multiline
        />
      </View>
      <AddressSelectionModal
        visibility={addressModalVisibility}
        address={userInfo.address}
        action={{ setCity, setDistrict, setWard, hideModal: hideAddressSelect }}
      />
      <View style={styles.buttonContainer}>
        {isEdit ? (
          <View style={{ flexDirection: 'row', alignSelf: 'flex-end', gap: 10 }}>
            <Button
              icon="pencil"
              mode="outlined"
              onPress={() => {
                Popup.show({
                  type: 'confirm',
                  title: 'Confirmation!!!',
                  textBody: 'Assure your change in profile!',
                  buttonText: 'Confirm',
                  okButtonStyle: { backgroundColor: 'blue' },
                  callback: async () => {
                    const data = await userService.updateInfoCurrent(userInfo)
                    setUser(data.user)
                    setEdit(false)
                    Popup.hide()
                  },
                  cancelCallback: () => {
                    Popup.hide()
                  },
                })
              }}
            >
              {t('saveChanges')}
            </Button>
            <Button
              icon="cancel"
              textColor="white"
              mode="contained"
              onPress={() => {
                setUserInfo(user)
                setEdit(false)
              }}
            >
              {t('cancel')}
            </Button>
          </View>
        ) : (
          <Button
            icon="pencil"
            mode="outlined"
            onPress={() => setEdit(true)}
            style={styles.editButton}
          >
            {t('edit')}
          </Button>
        )}
      </View>
    </View>
  )
}
