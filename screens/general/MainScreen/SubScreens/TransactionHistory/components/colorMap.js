import { TRANSACTION } from '../../../../../../constants'

export const statuColorMap = new Map([
  [TRANSACTION.STATUS.PROCESSING, '#1890ff'],
  [TRANSACTION.STATUS.CANCELED, '#ff4842'],
  [TRANSACTION.STATUS.DONE, '#5cb85c'],
])
