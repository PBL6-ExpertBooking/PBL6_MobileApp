export const segmentedButtons = {
  transaction: [
    {
      value: 'All',
      label: 'All',
      icon: 'bank-transfer',
      style: {
        borderTopLeftRadius: 0,
      },
    },
    {
      value: 'Income',
      label: 'Income',
      icon: 'bank-transfer-in',
    },
    {
      value: 'Outcome',
      label: 'Outcome',
      icon: 'bank-transfer-out',
      style: {
        borderTopRightRadius: 0,
      },
    },
  ],

  status: [
    {
      value: 'All',
      label: 'All',
      style: {
        borderBottomLeftRadius: 0,
      },
    },
    {
      value: 'Pending',
      label: 'Pending',
      icon: 'calendar-clock',
    },
    {
      value: 'Confirmed',
      label: 'Confirmed',
      icon: 'calendar-check',
      style: {
        borderBottomRightRadius: 0,
      },
    },
  ],
}
