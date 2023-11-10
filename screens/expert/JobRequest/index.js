import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { DataTable } from 'react-native-paper'
import { styles } from './style.module'
import JobItem from './components/JobItem'
import { expertService } from '../../../services'

export default function JobRequest() {
  const [page, setPage] = useState(0)
  const [jobPage, setJobPage] = useState({ job_requests: [], totalPages: 1 })

  const getJobPage = async () => {
    const data = await expertService.getAcceptedJobs({
      page: page + 1,
      limit: 5,
    })
    setJobPage(data.pagination)
  }

  useEffect(() => {
    getJobPage()
  }, [page])

  return (
    <View style={styles.container}>
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
