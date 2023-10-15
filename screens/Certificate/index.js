import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { styles } from './style.module'

import CertificateCardItem from './components/CertificateCardItem'

export default function Certificate() {
  const [certList, setCertList] = useState([])

  useEffect(() => {
    setCertList([
      {
        major: 'IT',
        title: 'Giải nhất cuộc thi hack nasa bằng html',
        photoURL:
          'https://thiepmung.com/uploads/worigin/2022/04/16/lam-giay-chung-nhan-thanh-tich-dep-nhat_9c193.jpg',
        status: 'confirmed',
        description:
          'Giải thưởng danh giá danh cho người xuất sắc trong cuộc thi hack nasa khét tiếng quốc tế, 100 năm tổ chức 1 lần',
      },
      {
        major: 'IT',
        title: 'Giải nhất cuộc thi javalorant, htmlol',
        photoURL:
          'https://thiepmung.com/uploads/worigin/2022/04/16/lam-giay-chung-nhan-thanh-tich-dep-nhat_9c193.jpg',
        status: 'confirmed',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      },
    ])
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.certListView}
        style={styles.certListStyle}
      >
        {certList.map((item, index) => (
          <CertificateCardItem key={index} item={item} />
        ))}
      </ScrollView>
    </View>
  )
}
