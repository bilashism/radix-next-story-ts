import { ROOT_INPUT_STYLES } from '@/styles/input'
import { classNames } from '@/styles/styling'
import { Clock9 } from 'lucide-react'
import React, { forwardRef, type InputHTMLAttributes } from 'react'
import { Button } from '../button'
import { Card } from '../card'
import { List } from '../list'
import { Popover } from '../popover'

export interface TimePickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value?: string
  onValueChange?: (updatedTime: string) => void
  open?: boolean
  onSetOpen: (open: boolean) => void
}

const generateNumberRange = (limit: number) => {
  return Array.from({ length: limit }, (_, index) => index)
}

const hours = generateNumberRange(24)
const minutes = generateNumberRange(60)

const getCurrentTime = (): { hours: string; minutes: string } => {
  const currentTime = new Date()
  const hours = currentTime.getHours().toString().padStart(2, '0')
  const minutes = currentTime.getMinutes().toString().padStart(2, '0')
  return { hours, minutes }
}

export const TimePicker = forwardRef<HTMLInputElement, TimePickerProps>(
  ({ className, onValueChange, onSetOpen, open, ...rest }: TimePickerProps) => {
    const [selectedHour, setSelectedHour] = React.useState('00')
    const [selectedMinute, setSelectedMinute] = React.useState('00')

    const handleHourSelection = (hourValue: string) => {
      setSelectedHour(hourValue)
      const formattedTime = `${hourValue}:${selectedMinute}`
      onValueChange && onValueChange(formattedTime)
    }

    const handleMinuteSelection = (minuteValue: string) => {
      setSelectedMinute(minuteValue)
      const formattedTime = `${selectedHour}:${minuteValue}`
      onValueChange && onValueChange(formattedTime)
    }

    const handleCurrentTime = () => {
      const { hours, minutes } = getCurrentTime()
      setSelectedHour(hours)
      setSelectedMinute(minutes)
      const formattedTime = `${hours}:${minutes}`
      onValueChange && onValueChange(formattedTime)
    }

    return (
      <Popover open={open} onOpenChange={onSetOpen}>
        <div className="flex items-center gap-2 group/picker">
          <Popover.Trigger asChild>
            <input
              type="text"
              readOnly={true}
              className={classNames(ROOT_INPUT_STYLES, 'cursor-pointer', className)}
              value={`${selectedHour}:${selectedMinute}`}
              onClick={() => onSetOpen(!open)}
              {...rest}
            />
          </Popover.Trigger>

          <Button
            variant="sm/secondary"
            className="!p-2 !rounded-full !border-accent-orange-500"
            onClick={() => onSetOpen(!open)}
            startIcon={<Clock9 className="h-5 w-5 text-accent-orange-500" />}
          />
        </div>

        <Popover.Content className="w-auto p-0">
          <Card className="justify-between !px-2">
            <div className="w-40 h-60 flex flex-row overflow-x-auto border-b pb-3 border-primary-200">
              <div className="w-1/2 h-full overflow-y-auto border-r border-primary-200 p-1">
                <List className="h-full flex flex-col gap-1">
                  {hours.map((hour) => {
                    const formattedHour = String(hour).padStart(2, '0')

                    return (
                      <List.Item
                        key={hour}
                        value={hour}
                        onClick={() => handleHourSelection(formattedHour)}
                        className={classNames(
                          `whitespace-nowrap px-2 py-1 cursor-pointer self-center focus:border-accent-orange-600 focus:bg-accent-orange-100 focus:border-2 focus:rounded-8 ${
                            selectedHour === formattedHour
                              ? 'bg-accent-orange-100 rounded-8 border border-accent-orange-600 text-accent-orange-800'
                              : ''
                          }`,
                        )}
                      >
                        {formattedHour}
                      </List.Item>
                    )
                  })}
                </List>
              </div>

              <div className="w-1/2 h-full overflow-y-auto p-1">
                <List className="h-full flex flex-col gap-1">
                  {minutes.map((minute) => {
                    const formattedMinute = String(minute).padStart(2, '0')

                    return (
                      <List.Item
                        key={minute}
                        value={minute}
                        onClick={() => handleMinuteSelection(formattedMinute)}
                        className={classNames(
                          `whitespace-nowrap px-2 py-1 cursor-pointer self-center focus:border-accent-orange-500 focus:bg-accent-orange-100 focus:border-2 focus:rounded-8 ${
                            selectedMinute === formattedMinute
                              ? 'bg-accent-orange-100 rounded-8 border border-accent-orange-600 text-accent-orange-800'
                              : ''
                          }`,
                        )}
                      >
                        {formattedMinute}
                      </List.Item>
                    )
                  })}
                </List>
              </div>
            </div>

            <div className="mt-3 flex justify-between">
              <Button variant="sm/secondary" onClick={handleCurrentTime}>
                Nu
              </Button>

              <Button variant="sm/secondary" onClick={() => onSetOpen(!open)}>
                Ok
              </Button>
            </div>
          </Card>
        </Popover.Content>
      </Popover>
    )
  },
)

TimePicker.displayName = 'TimePicker'
