import { routes } from '../api'
import { AxiosInterceptors } from '../utils'
import { templatePopupOnRejection } from './common/template'

export async function getDeposit(amount) {
  return await templatePopupOnRejection(async () => {
    const response = await AxiosInterceptors.post(routes.transaction.deposit, {
      amount,
    })
    return response
  })
}

export async function getPayment(job_request_id) {
  return await templatePopupOnRejection(async () => {
    const response = await AxiosInterceptors.post(routes.transaction.paymentUrl, {
      job_request_id,
    })
    return response
  })
}

export async function executePayment(transaction_id) {
  return await templatePopupOnRejection(async () => {
    const response = await AxiosInterceptors.post(
      routes.transaction.executePayment(transaction_id),
    )
    return response
  })
}
