export const MajorMap = new Map([
  [
    'IT',
    {
      fullName: 'Information Technology',
      icon: 'code-tags',
    },
  ],
  [
    'Mech',
    {
      fullName: 'Mechanic',
      icon: 'cogs',
    },
  ],
])

const MajorKeys = Array.from(MajorMap.keys())

export const MajorList = []

MajorKeys.forEach((key) =>
  MajorList.push({ label: key, value: MajorMap.get(key).fullName }),
)
MajorList.push({ label: 'Other', value: 'Other' })
