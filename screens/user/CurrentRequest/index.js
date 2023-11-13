import React, { useEffect, useState, useContext, useRef } from 'react'
import { Text, View } from 'react-native'
import { DataTable } from 'react-native-paper'
import { Dropdown } from 'react-native-element-dropdown'
import { styles } from './style.module'
import JobItem from './components/JobItem'
import { jobService } from '../../../services'
import { AppContext } from '../../../contexts/AppContext'
import { ScrollView } from 'react-native'

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

  const status = useRef(false)

  const getJobPage = async () => {
    const data = await jobService.getCurrentUserRequests({
      page: page + 1,
      limit: 5,
      major_id: selectedMajor._id,
    })
    setJobPage(data.pagination)
  }

  useEffect(() => {
    getJobPage()
  }, [page])

  useEffect(() => {
    if (page === 0 && status) getJobPage()
    else setPage(0)
  }, [selectedMajor._id])

  useEffect(() => {
    status.current = true
  }, [])

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
      <ScrollView
        contentContainerStyle={styles.dataContainer}
        style={styles.dataContainerStyle}
      >
        {jobPage.job_requests.map((item, index) => (
          <JobItem key={index} item={item} />
        ))}
      </ScrollView>
      <DataTable style={{ marginTop: 'auto', marginBottom: 5 }}>
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