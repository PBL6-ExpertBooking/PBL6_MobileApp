import React, { useState, useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { styles } from './style.module'
import JobItem from './components/JobItem'
import { expertService } from '../../../services'
import { PaginationBar } from '../../../components'

export default function JobRequest() {
  const [page, setPage] = useState(1)
  const [jobPage, setJobPage] = useState({ job_requests: [], totalPages: 1 })

  const [loading, setLoading] = useState(false)

  const getJobPage = async () => {
    setLoading(true)
    const data = await expertService.getAcceptedJobs({
      page: page,
      limit: 5,
    })
    setJobPage(data.pagination)
    setLoading(false)
  }

  useEffect(() => {
    getJobPage()
  }, [page])

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator style={{ flex: 1 }} animating size="large" />}
      {!loading && (
        <View style={styles.dataContainer}>
          <ScrollView
            contentContainerStyle={styles.dataContentContainer}
            style={styles.dataContainerStyle}
          >
            {jobPage.job_requests.map((item, index) => (
              <JobItem key={index} item={item} deleteJobCallback={getJobPage} />
            ))}
          </ScrollView>
        </View>
      )}
      <PaginationBar
        page={page}
        maxPage={jobPage.totalPages}
        onPageChange={(page) => setPage(page)}
        style={styles.paginationBar}
      />
    </View>
  )
}
