import React, { useState, useEffect } from 'react'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { styles } from './style.module'
import HistoryItem from './components/HistoryItem'
import {
  ActivityIndicator,
  DataTable,
  Divider,
  Searchbar,
  SegmentedButtons,
  TextInput,
} from 'react-native-paper'
import { segmentedButtons } from './buttons'
import { transactionService } from '../../../../../services'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { useTranslation } from 'react-i18next'
import { datetimeHelper } from '../../../../../utils'

export default function TransactionHistory() {
  const [selectedStatus, setSelectedStatus] = useState('All')
  const [selectedTransferMode, setSelectedTransferMode] = useState('All')

  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)
  const [pagination, setPagination] = useState({ transactions: [], totalPages: 1 })

  const [dateRange, setDateRange] = useState({ from: '', to: '' })

  const [fromDatePickerVisibility, setFromDatePickerVisibility] = useState(false)
  const [toDatePickerVisibility, setToDatePickerVisibility] = useState(false)

  const showFromDatePicker = () => setFromDatePickerVisibility(true)
  const hideFromDatePicker = () => setFromDatePickerVisibility(false)

  const showToDatePicker = () => setToDatePickerVisibility(true)
  const hideToDatePicker = () => setToDatePickerVisibility(false)

  const { t } = useTranslation()

  useEffect(() => {
    const getPagination = async () => {
      setLoading(true)
      const data = await transactionService.getTransactionOfCurrentUser({
        page: page + 1,
        limit: 10,
        from: dateRange.from,
        to: dateRange.to,
      })
      setPagination(data)
      setLoading(false)
    }
    getPagination()
  }, [page, dateRange])

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
        {t('transactionHistory')}
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
      <View style={styles.datePicker}>
        <View style={styles.pickerContainer}>
          <TouchableOpacity onPress={showFromDatePicker}>
            <TextInput
              mode="outlined"
              label={t('from')}
              dense
              value={dateRange.from || 'MM/DD/YYYY'}
              right={
                dateRange.from && (
                  <TextInput.Icon
                    icon="close-circle-outline"
                    onPress={() =>
                      setDateRange((dateRange) => ({ ...dateRange, from: '' }))
                    }
                  />
                )
              }
              editable={false}
            />
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={fromDatePickerVisibility}
            mode="date"
            date={new Date()}
            onCancel={hideFromDatePicker}
            onConfirm={(date) => {
              hideFromDatePicker()
              setDateRange((dateRange) => ({
                ...dateRange,
                from: datetimeHelper.getFormatedStringfromISODate(date),
              }))
            }}
            maximumDate={new Date()}
          />
        </View>
        <View style={styles.pickerContainer}>
          <TouchableOpacity onPress={showToDatePicker}>
            <TextInput
              mode="outlined"
              label={t('to')}
              dense
              value={dateRange.to || 'MM/DD/YYYY'}
              right={
                dateRange.to && (
                  <TextInput.Icon
                    icon="close-circle-outline"
                    onPress={() =>
                      setDateRange((dateRange) => ({ ...dateRange, to: '' }))
                    }
                  />
                )
              }
              editable={false}
            />
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={toDatePickerVisibility}
            mode="date"
            date={new Date()}
            onCancel={hideFromDatePicker}
            onConfirm={(date) => {
              hideToDatePicker()
              setDateRange((dateRange) => ({
                ...dateRange,
                to: datetimeHelper.getFormatedStringfromISODate(date),
              }))
            }}
            maximumDate={new Date()}
          />
        </View>
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
