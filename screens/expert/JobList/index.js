import React, { useEffect, useState, useContext } from 'react'
import { Text, View } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import { styles } from './style.module'
import JobItem from './components/JobItem'
import { DataTable } from 'react-native-paper'
import { jobService } from '../../../services'
import { AppContext } from '../../../contexts/AppContext'

export default function JobList() {
  const { majorFilterList } = useContext(AppContext)

  const [page, setPage] = useState(0)
  const [jobPage, setJobPage] = useState({ job_requests: [], totalPages: 1 })
  const [selectedMajor, setSelectedMajor] = useState({
    _id: '',
    name: 'None',
    descriptions: 'Nothing chosen',
    deleted: false,
    __v: 0,
  })

  useEffect(() => {
    const getJobPage = async () => {
      const data = await jobService.getJobsPagination({
        page: page + 1,
        limit: 5,
        major_id: selectedMajor._id,
      })
      setJobPage(data.pagination)
    }
    getJobPage()
  }, [page])

  useEffect(() => {
    setPage(0)
  }, [selectedMajor._id])

  return (
    <View style={styles.container}>
      <View style={styles.filter}>
        <Text style={{ fontSize: 17, fontWeight: 700 }}>Major: </Text>
        <Dropdown
          style={[styles.dropdown]}
          selectedTextStyle={styles.selectedTextStyle}
          data={majorFilterList}
          placeholder="Major"
          maxHeight={300}
          labelField="name"
          valueField="_id"
          value={selectedMajor.value}
          onChange={(item) => {
            setSelectedMajor(item)
          }}
          dense
          search
          searchPlaceholder="Search major..."
        />
      </View>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title textStyle={styles.textStyle}>Major</DataTable.Title>
          <DataTable.Title textStyle={styles.textStyle}>Title</DataTable.Title>
          <DataTable.Title textStyle={styles.textStyle}>Price</DataTable.Title>
          <DataTable.Title textStyle={styles.textStyle}>Details</DataTable.Title>
        </DataTable.Header>
        {jobPage.job_requests.map((item, index) => (
          <JobItem key={index} item={item} />
        ))}
        <DataTable.Pagination
          page={page}
          numberOfPages={jobPage.totalPages}
          onPageChange={(page) => setPage(page)}
          label={`Page ${page + 1} of ${jobPage.totalPages}`}
          showFastPaginationControls
        />
      </DataTable>
    </View>
  )
}
