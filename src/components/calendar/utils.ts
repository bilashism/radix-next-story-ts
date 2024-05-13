export const formatMonth = (index: number, format: 'short' | 'long') => {
  const date = new Date().setMonth(index)
  const monthFormatter = new Intl.DateTimeFormat('nl-nl', {
    month: format,
  })

  return monthFormatter.format(date)
}

export const generateYears = (fromYear: Date, toYear: Date) => {
  const diff = toYear.getFullYear() - fromYear.getFullYear()

  if (diff < 0) throw new Error('End date can not be before the startdate')

  return Array.from({ length: diff + 1 }, (_, i) => {
    const year = new Date(fromYear)
    year.setFullYear(year.getFullYear() + i)

    return {
      key: year.getFullYear().toString(),
      value: year.getFullYear().toString(),
    }
  })
}

export const generateMonths = () =>
  Array.from({ length: 12 }, (_, i) => ({
    key: i.toString(),
    value: formatMonth(i, 'long'),
  }))
