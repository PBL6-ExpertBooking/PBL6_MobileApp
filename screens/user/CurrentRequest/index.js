import React, { useEffect, useState, useContext, useRef } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { Dropdown } from 'react-native-element-dropdown'
import { styles } from './style.module'
import JobItem from './components/JobItem'
import { jobService } from '../../../services'
import { AppContext } from '../../../contexts/AppContext'
import { PaginationBar } from '../../../components'
import { useTranslation } from 'react-i18next'

export default function JobList() {
  const { majorFilterList } = useContext(AppContext)

  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
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
    setLoading(true)
    const data = await jobService.getCurrentUserRequests({
      page: page,
      limit: 10,
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

  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <View style={styles.filter}>
        <Text style={{ fontSize: 17, fontWeight: 700 }}>{t('major')}: </Text>
        <Dropdown
          style={[styles.dropdown]}
          selectedTextStyle={styles.selectedTextStyle}
          data={majorFilterList}
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
          searchPlaceholder="Search major..."
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
              <JobItem
                key={index}
                item={item}
                onItemStatusChange={(newStates) => {
                  setJobPage((prev) => ({
                    ...prev,
                    job_requests: prev.job_requests.map((item) =>
                      item._id === newStates._id ? newStates : item,
                    ),
                  }))
                }}
              />
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
