import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { styles } from './style.module'
import JobItem from './components/JobItem'
import { DataTable } from 'react-native-paper'
import { jobService } from '../../../services'

export default function JobList() {
  const [page, setPage] = useState(1)
  const [jobPage, setJobPage] = useState({ job_requests: [], totalPages: 1 })

  useEffect(() => {
    const getJobPage = async () => {
      const data = await jobService.getJobsPagination({ page, limit: 5 })
      setJobPage(data.pagination)
    }
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
          numberOfPages={jobPage.totalPages + 1}
          onPageChange={(page) => setPage(page)}
          label={`Page ${page + 1} of ${jobPage.totalPages + 1}`}
          showFastPaginationControls
        />
      </DataTable>
    </View>
  )
}
