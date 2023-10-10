import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { styles } from './style.module'
import JobItem from './components/JobItem'
import { DataTable } from 'react-native-paper'

const sampleJobList = [
  {
    user: {
      first_name: 'Tran Minh',
      last_name: 'Nhat',
      email: 'minhnhat912002@gmail.com',
    },
    job: {
      major: 'IT',
      title: 'Hack nasa bằng HTML',
      description: 'Em có nhu cầu hack nasa bằng HTML, nhờ chuyên gia tư vấn',
    },
    price: 20000,
    paymentMethod: 'Momo',
  },
  {
    user: {
      first_name: 'Tran Minh',
      last_name: 'Nhat',
      email: 'minhnhat912002@gmail.com',
    },
    job: {
      major: 'IT',
      title: 'Hack nasa bằng HTML',
      description: 'Em có nhu cầu hack nasa bằng HTML, nhờ chuyên gia tư vấn',
    },
    price: 20000,
    paymentMethod: 'Momo',
  },
  {
    user: {
      first_name: 'Tran Minh',
      last_name: 'Nhat',
      email: 'minhnhat912002@gmail.com',
    },
    job: {
      major: 'IT',
      title: 'Hack nasa bằng HTML',
      description: 'Em có nhu cầu hack nasa bằng HTML, nhờ chuyên gia tư vấn',
    },
    price: 20000,
    paymentMethod: 'Momo',
  },
]

export default function JobList() {
  const [jobList, setJobList] = useState([])

  useEffect(() => {
    setJobList(sampleJobList)
  }, [])

  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Major</DataTable.Title>
          <DataTable.Title>Title</DataTable.Title>
          <DataTable.Title>Price</DataTable.Title>
          <DataTable.Title>Details</DataTable.Title>
        </DataTable.Header>
        {jobList.map((item, index) => (
          <JobItem key={index} item={item} />
        ))}
      </DataTable>
    </View>
  )
}
