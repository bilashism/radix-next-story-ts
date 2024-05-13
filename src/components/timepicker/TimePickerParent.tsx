import React, { useState } from 'react'

import { TimePicker } from './TimePicker'

const TimePickerParent = () => {
  const [selectedTime, setSelectedTime] = useState('12:00')
  const [timePickerOpen, setTimePickerOpen] = React.useState(false)

  const handleTimeChange = (updatedTime: string) => {
    setSelectedTime(updatedTime)
  }

  return (
    <TimePicker
      value={selectedTime}
      onValueChange={handleTimeChange}
      open={timePickerOpen}
      onSetOpen={setTimePickerOpen}
    />
  )
}

export default TimePickerParent
