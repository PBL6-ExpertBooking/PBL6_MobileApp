import React, { useState, useEffect } from 'react'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { styles } from './style.module'
import HistoryItem from './components/HistoryItem'
import { ActivityIndicator, TextInput } from 'react-native-paper'
import { transactionService } from '../../../services'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { useTranslation } from 'react-i18next'
import { datetimeHelper } from '../../../utils'
import { Dropdown } from 'react-native-element-dropdown'
import { PaginationBar } from '../../../components'

export default function TransactionHistory() {
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [pagination, setPagination] = useState({ transactions: [], totalPages: 1 })
  const [dateRange, setDateRange] = useState({ from: '', to: '' })
  const [statusFilter, setStatusFilter] = useState({ label: '', value: '' })

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
        page: page,
        limit: 10,
        from: dateRange.from,
        to: dateRange.to,
        transaction_status: statusFilter.value,
      })
      setPagination(data)
      setLoading(false)
    }
    getPagination()
  }, [page, dateRange, statusFilter.value])

  return (
    <View style={styles.container}>
      <View style={styles.statusFilter}>
        <Text style={[styles.dropdownLabel]}>{t('status')}:</Text>
        <Dropdown
          style={[styles.dropdown]}
          value={statusFilter.value}
          data={[
            { label: t('all'), value: '' },
            { label: t('DONE'), value: 'DONE' },
            { label: t('PROCESSING'), value: 'PROCESSING' },
            { label: t('CANCELED'), value: 'CANCELED' },
          ]}
          labelField="label"
          valueField="value"
          onChange={(item) => {
            setStatusFilter(item)
          }}
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
              style={styles.date}
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
              style={styles.date}
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
      {loading && (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator styles={{ flex: 1 }} animating size="large" />
        </View>
      )}
      {!loading && (
        <View style={styles.dataContainer}>
          <ScrollView
            contentContainerStyle={styles.historyContainer}
            style={styles.historyContentStyle}
          >
            {pagination.transactions.map((item) => (
              <HistoryItem key={item._id} transaction={item} />
            ))}
          </ScrollView>
        </View>
      )}
      <PaginationBar
        page={page}
        maxPage={pagination.totalPages}
        onPageChange={(page) => setPage(page)}
        style={styles.paginationBar}
      />
    </View>
  )
}
