'use client'

import { testId } from '@/utils/testId'
import React, { useCallback, useMemo, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { useDebounce } from '@/hooks/useDebounce'
import { HOVER_STYLES } from '@/styles'
import { classNames } from '@/styles/styling'
import { Checkbox } from '../checkbox'
import Combobox from '../combobox-new/combobox'
import { CommandItem } from '../command'
import { Typography } from '../typography'
import { FormDescription, FormField, FormItem, FormLabel, FormMessage } from './form'

export type FormComboboxOption = {
  label: string
  value: string
}

export interface FormComboboxProps {
  label: string
  name: string
  options: FormComboboxOption[]
  description?: string
  required?: boolean
  placeholder?: string
  triggerPlaceholder?: string
  triggerClassName?: string
  startIcon?: React.ReactNode
  dataCy?: string
}

const MAX_OPTIONS_DISPLAY = 5
const DEBOUNCE_DELAY = 250

const getLabels = (options: FormComboboxOption[]) => {
  return options.map((option) => option.label)
}

export const FormCombobox = ({
  label,
  name,
  options,
  description,
  required,
  placeholder,
  triggerPlaceholder,
  triggerClassName,
  startIcon,
  dataCy,
}: FormComboboxProps) => {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  const debouncedQuery = useDebounce(query, DEBOUNCE_DELAY)

  const { control, setValue, resetField, watch } = useFormContext()

  const selectedOptions = (watch(name) ?? []) as FormComboboxOption[]

  const filteredOptions = useMemo(() => {
    return debouncedQuery
      ? options
          .filter(({ label }) => label.toLowerCase().includes(debouncedQuery.toLowerCase()))
          .slice(0, MAX_OPTIONS_DISPLAY)
      : options.slice(0, MAX_OPTIONS_DISPLAY)
  }, [options, debouncedQuery])

  const handleClearSelectedOptions = useCallback(() => {
    resetField(name)
  }, [name, resetField])

  const handleSelectOption = ({ label, value }: FormComboboxOption) => {
    const isSelected = selectedOptions.some((option) => option.label === label)

    if (isSelected) {
      // remove the selected option
      const filteredValues = selectedOptions.filter((option) => option.label !== label)
      setValue(name, filteredValues)
    } else {
      // add the selected option
      setValue(name, [...selectedOptions, { label, value }])
    }
  }

  const handleIsSelected = (label: FormComboboxOption['label']) => {
    return selectedOptions.some((option) => option.label.toLowerCase() === label.toLowerCase())
  }

  const labels = getLabels(selectedOptions)

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel required={required}>{label}</FormLabel>
          {description && <FormDescription>{description}</FormDescription>}
          <Combobox open={open} onOpenChange={setOpen}>
            <Combobox.Trigger
              className={classNames(triggerClassName)}
              data-cy={testId(`combobox-trigger-${dataCy}`)} // e.g. combobox-trigger-user-update
              numberOfSelectedOptions={(field.value as FormComboboxOption[])?.length}
              startIcon={startIcon}
            >
              {/* render all selected options as badges */}
              <div className="flex items-center gap-1 truncate max-w-fit">
                <Typography as="span" className="truncate text-primary-800" title={labels.join()}>
                  {labels.join()}
                </Typography>
              </div>
              {!labels.length && triggerPlaceholder}
            </Combobox.Trigger>
            <Combobox.List
              className="max-w-96 min-w-96"
              placeholder={placeholder ? placeholder : 'Zoek een optie'}
              emptyMessage="Geen opties gevonden"
              value={query}
              onValueChange={setQuery}
            >
              {filteredOptions.map(({ value, label }, idx) => {
                const selected = handleIsSelected(label)

                return (
                  <CommandItem
                    key={value}
                    value={label} // makes options filterable by using their labels instead of underlying values
                    data-cy={testId(`combobox-option-${idx}`)}
                    onSelect={(selected) => handleSelectOption({ label: selected, value })}
                    className={classNames(
                      HOVER_STYLES,
                      'flex w-full cursor-default items-center break-all rounded-8 py-2 pr-2 gap-4 outline-none aria-selected:rounded-8 aria-selected:bg-accent-orange-100 aria-selected:text-accent-orange-800',
                    )}
                  >
                    <Checkbox checked={selected} onChange={() => {}} readOnly />
                    <Typography as="span" variant="md/regular">
                      {label}
                    </Typography>
                  </CommandItem>
                )
              })}
              {!!labels.length && (
                <div className="mt-2 space-y-2">
                  <hr />
                  <button
                    type="button"
                    onClick={handleClearSelectedOptions}
                    className={classNames(
                      HOVER_STYLES,
                      'w-full py-2 text-primary-800 text-md text-center outline-none ',
                    )}
                    data-cy={testId(`combobox-clear-selected`)}
                  >
                    Wis selectie
                  </button>
                </div>
              )}
            </Combobox.List>
          </Combobox>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default FormCombobox
