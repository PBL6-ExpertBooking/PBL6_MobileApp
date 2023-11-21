import React, { useState, useEffect } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { styles } from './style.module'
import HistoryItem from './components/HistoryItem'
import {
  ActivityIndicator,
  DataTable,
  Divider,
  Searchbar,
  SegmentedButtons,
} from 'react-native-paper'
import { segmentedButtons } from './buttons'
import { transactionService } from '../../../../../services'

export default function TransactionHistory() {
  const [selectedStatus, setSelectedStatus] = useState('All')
  const [selectedTransferMode, setSelectedTransferMode] = useState('All')

  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)
  const [pagination, setPagination] = useState({ transactions: [], totalPages: 1 })

  useEffect(() => {
    const getPagination = async () => {
      setLoading(true)
      const data = await transactionService.getTransactionOfCurrentUser({
        page: page + 1,
        limit: 10,
      })
      setPagination(data)
      setLoading(false)
    }
    getPagination()
  }, [page])

  return (
    <View style={styles.container}>
      <Text
        style={{
          alignSelf: 'flex-start',
          marginLeft: '5%',
          marginBottom: 10,
          fontSize: 20,
          fontWeight: 600,
        }}
      >
        Transaction History
      </Text>
      <View style={styles.filterContainer}>
        <Searchbar placeholder="Search" style={styles.searchBar} />
      </View>
      <View style={styles.buttonContainer}>
        <SegmentedButtons
          value={selectedStatus}
          onValueChange={setSelectedStatus}
          buttons={segmentedButtons.status}
          density="medium"
          style={styles.segmentedButtons}
        />
        <SegmentedButtons
          value={selectedTransferMode}
          onValueChange={setSelectedTransferMode}
          buttons={segmentedButtons.transaction}
          density="medium"
          style={styles.segmentedButtons}
        />
      </View>
      <Divider style={{ width: '100%', height: 2 }} />
      {loading && (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator styles={{ flex: 1 }} animating size="large" />
        </View>
      )}
      {!loading && (
        <ScrollView
          contentContainerStyle={styles.historyContainer}
          style={{ width: '90%', marginTop: 10 }}
        >
          {pagination.transactions.map((item) => (
            <HistoryItem key={item._id} transaction={item} />
          ))}
        </ScrollView>
      )}
      <DataTable style={{ marginTop: 'auto', marginBottom: 5 }}>
        <DataTable.Pagination
          page={page}
          numberOfPages={pagination.totalPages}
          onPageChange={(page) => setPage(page)}
          label={`Page ${page + 1} of ${pagination.totalPages}`}
          showFastPaginationControls
        />
      </DataTable>
    </View>
  )
}
