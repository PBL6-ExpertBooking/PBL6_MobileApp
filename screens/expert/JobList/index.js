import React, { useEffect, useState, useContext, useRef } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { Dropdown } from 'react-native-element-dropdown'
import { styles } from './style.module'
import JobItem from './components/JobItem'
import { jobService } from '../../../services'
import { AppContext } from '../../../contexts/AppContext'
import { PaginationBar } from '../../../components'
import { useTranslation } from 'react-i18next'

export default function JobList() {
  const { majors } = useContext(AppContext)
  const { t } = useTranslation()

  const [page, setPage] = useState(1)
  const [jobPage, setJobPage] = useState({ job_requests: [], totalPages: 1 })
  const [selectedMajor, setSelectedMajor] = useState({
    _id: '',
    name: t('all'),
  })

  const [loading, setLoading] = useState(false)

  const status = useRef(false)

  const getJobPage = async () => {
    setLoading(true)
    const data = await jobService.getJobsPagination({
      page: page,
      limit: 5,
      major_id: selectedMajor._id,
    })
    setJobPage(data.pagination)
    setLoading(false)
  }

  useEffect(() => {
    getJobPage()
  }, [page])

  useEffect(() => {
    if (status.current) {
      if (page === 1) getJobPage()
      else setPage(1)
    }
  }, [selectedMajor._id])

  useEffect(() => {
    status.current = true
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.filter}>
        <Text style={{ fontSize: 17, fontWeight: 700 }}>{t('major')}: </Text>
        <Dropdown
          style={[styles.dropdown]}
          selectedTextStyle={styles.selectedTextStyle}
          data={[{ _id: '', name: t('all') }, ...majors]}
          placeholder={t('major')}
          maxHeight={300}
          labelField="name"
          valueField="_id"
          value={selectedMajor.value}
          onChange={(item) => {
            setSelectedMajor(item)
          }}
          dense
          search
          searchPlaceholder={t('major')}
        />
      </View>
      {loading && <ActivityIndicator style={{ flex: 1 }} animating size="large" />}
      {!loading && (
        <View style={styles.dataContainer}>
          <ScrollView
            contentContainerStyle={styles.dataContentContainer}
            style={styles.dataContainerStyle}
          >
            {jobPage.job_requests.map((item, index) => (
              <JobItem key={index} item={item} />
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
