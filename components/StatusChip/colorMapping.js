import { STATUS } from '../../constants'

export const colorMap = new Map([
  [
    STATUS.PENDING,
    {
      bgColor: '#fff7cd',
      textColor: '#ffc107',
      text: 'Pending',
    },
  ],
  [
    STATUS.PROCESSING,
    {
      bgColor: '#d0f2ff',
      textColor: '#1890ff',
      text: 'Processing',
    },
  ],
  [
    STATUS.DONE,
    {
      bgColor: '#e9fcd4',
      textColor: '#5cb85c',
      text: 'Completed',
    },
  ],
  [
    STATUS.CANCELED,
    {
      bgColor: '#ffe7d9',
      textColor: '#ff4842',
      text: 'Cancel',
    },
  ],
])
