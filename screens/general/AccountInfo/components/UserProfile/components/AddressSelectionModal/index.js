import React, { memo, useContext, useEffect, useRef, useState } from 'react'
import { Modal, Portal } from 'react-native-paper'
import { styles } from './style.module'
import { Text, View } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import { AppContext } from '../../../../../../../contexts'
import { provinceService } from '../../../../../../../services'

function AddressSelectionModal({ visibility, address, action }) {
  const { provinces } = useContext(AppContext)
  const initRender = useRef(true)

  const [districtList, setDistrictList] = useState([])
  const [wardList, setWardList] = useState([])

  const { city, district, ward } = address
  const { setCity, setDistrict, setWard, hideModal } = action

  useEffect(() => {
    if (initRender.current === true) initRender.current = false
    else {
      setDistrict(null)
      setWard(null)
    }
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
    <Portal>
      <Modal
        contentContainerStyle={styles.container}
        visible={visibility}
        onDismiss={hideModal}
      >
        <Text>Select Address</Text>
        <View style={styles.inputContainer}>
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
        </View>
      </Modal>
    </Portal>
  )
}

export default memo(AddressSelectionModal)
