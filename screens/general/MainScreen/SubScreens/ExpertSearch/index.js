import React, { useEffect, useRef, useState } from 'react'
import { View, Text } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { styles, textStyles } from './style.module'
import { useTranslation } from 'react-i18next'
import SearchForm from './components/SearchForm'
import SearchResult from './components/SearchResult'
import { PaginationBar } from '../../../../../components'
import { expertService } from '../../../../../services'

export default function ExpertSearch() {
  const [query, setQuery] = useState('')
  const [major, setMajor] = useState({ _id: '', name: '' })
  const [page, setPage] = useState(1)
  const [pagination, setPagination] = useState({ experts: [], totalPages: 1 })
  const [loading, setLoading] = useState(false)

  const status = useRef(false)

  const getPagination = async () => {
    setLoading(true)
    const pagination = await expertService.findExperts({
      page,
      limit: 5,
      search: query,
      major_id: major._id,
    })
    setPagination(pagination)
    setLoading(false)
  }

  useEffect(() => {
    getPagination()
  }, [page])

  useEffect(() => {
    if (page === 1 && status.current) getPagination()
    else setPage(1)
  }, [query, major._id])

  useEffect(() => {
    status.current = true
  }, [])

  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={textStyles.title}>{t('searchTitle')}</Text>
      </View>
      <SearchForm major={major} setMajor={setMajor} setQuery={setQuery} />
      {loading && <ActivityIndicator style={{ flex: 1 }} animating size="large" />}
      {!loading && <SearchResult experts={pagination.experts} />}
      <PaginationBar
        page={page}
        maxPage={pagination.totalPages}
        onPageChange={(page) => setPage(page)}
        modalBottomOffset={50}
        style={styles.paginationBar}
      />
    </View>
  )
}
