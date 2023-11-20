/* eslint-disable indent */
import React, { useContext } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'
import { styles } from './style.module'
import { jobService, transactionService } from '../../../../../../../services'
import { AppContext, AuthContext } from '../../../../../../../contexts'
import { STATUS } from '../../../../../../../constants'
import { Popup } from 'react-native-popup-confirm-toast'
import Receipt from './components/Receipt'

export default function ButtonContainer({
  data,
  status,
  setLoading,
  executeStatusChange,
  hideModal,
  isPaid,
  isReviewed,
}) {
  const { majors } = useContext(AppContext)
  const { user, setUser } = useContext(AuthContext)

  switch (status) {
    case STATUS.PENDING:
      return (
        <View style={styles.buttonContainer}>
          <Button
            icon="pencil"
            buttonColor="#2e63c9"
            textColor="white"
            style={{ flex: 1 }}
            onPress={async () => {}}
          >
            Edit
          </Button>
          <Button mode="outlined" style={{ flex: 1 }} onPress={() => {}}>
            Delete
          </Button>
        </View>
      )
    case STATUS.PROCESSING:
      return (
        <View style={styles.buttonContainer}>
          <Button
            icon="check"
            buttonColor="#2e63c9"
            textColor="white"
            style={{ flex: 1 }}
            onPress={async () => {
              setLoading(true)
              const response = await jobService.markComplete({ id: data._id })
              const major = majors.find(
                (item) => item._id === response.job_request.major,
              )
              hideModal()
              executeStatusChange({ ...response.job_request, major })
            }}
          >
            Complete
          </Button>
          <Button mode="outlined" style={{ flex: 1 }} onPress={hideModal}>
            Back
          </Button>
        </View>
      )
    case STATUS.DONE:
      return (
        <View style={styles.buttonContainer}>
          {!isPaid && (
            <Button
              icon="check"
              buttonColor="#2e63c9"
              textColor="white"
              style={{ flex: 1 }}
              onPress={async () => {
                setLoading(true)
                const { transaction } = await transactionService.getPayment(data._id)
                setLoading(false)
                if (user.balance < transaction.amount)
                  Popup.show({
                    type: 'danger',
                    title: 'Failure!',
                    textBody:
                      'Your current balance is lower than the transaction amount!',
                  })
                else
                  Popup.show({
                    type: 'confirm',
                    title: 'PAYMENT RECEIPT',
                    iconEnabled: false,
                    bodyComponent: () => (
                      <Receipt transaction={transaction} user={user} />
                    ),
                    buttonText: 'Confirm Payment',
                    confirmText: 'Cancel',
                    buttonContentStyle: {},
                    confirmButtonStyle: {},
                    bounciness: 0,
                    duration: 0,
                    closeDuration: 50,
                    callback: async () => {
                      Popup.hide()
                      setLoading(true)
                      const response = await transactionService.executePayment(
                        transaction._id,
                      )
                      executeStatusChange({
                        ...data,
                        time_payment: response.updatedAt,
                      })
                      setUser((user) => ({
                        ...user,
                        balance: user.balance - transaction.amount,
                      }))
                      setLoading(false)
                      Popup.show({
                        type: 'success',
                        title: 'Transaction Completed!',
                        buttonText: 'Ok',
                        okButtonStyle: { backgroundColor: '#2e63c9' },
                        callback: () => Popup.hide(),
                        bounciness: 0,
                        duration: 0,
                        closeDuration: 50,
                      })
                    },
                    cancelCallback: async () => {},
                  })
              }}
            >
              Payment
            </Button>
          )}
          {!isReviewed && (
            <Button mode="outlined" style={{ flex: 1 }} onPress={() => {}}>
              Review
            </Button>
          )}
        </View>
      )
    default:
      return <></>
  }
}
