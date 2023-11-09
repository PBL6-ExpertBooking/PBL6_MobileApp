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
      bgColor: 'blue',
      textColor: 'black',
      text: 'Processing',
    },
  ],
  [
    STATUS.DONE,
    {
      bgColor: 'Green',
      textColor: 'black',
      text: 'Done',
    },
  ],
  [
    STATUS.CANCELED,
    {
      bgColor: 'red',
      textColor: 'black',
      text: 'Cancel',
    },
  ],
])
