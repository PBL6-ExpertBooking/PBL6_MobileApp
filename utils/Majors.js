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
  MajorList.push({ _id: key, value: MajorMap.get(key).fullName }),
)
