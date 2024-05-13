'use client'

import { type ExtractProps } from '@/types'
import { Listbox, Transition } from '@headlessui/react'
import React, { Fragment, forwardRef } from 'react'
import MultiSelectLabel from './MultiSelectLabel'
import MultiSelectOption from './MultiSelectOption'
import MultiSelectOptions from './MultiSelectOptions'
import MultiSelectTrigger from './MultiSelectTrigger'

export type TMultiSelectOption = {
  key: string
  value: string
}
interface MultiSelectProps extends ExtractProps<typeof Listbox> {
  label?: string
  required?: boolean
  optional?: boolean
  placeholder?: string
  onChange?: (value: TMultiSelectOption[]) => void
  triggerClassName?: string
  children: React.ReactElement<typeof Listbox.Options>
  className?: string
}

const MultiSelectRoot = forwardRef<React.ElementRef<typeof Listbox>, MultiSelectProps>(
  (
    {
      className,
      label,
      disabled,
      onChange,
      required,
      optional,
      placeholder,
      children,
      value,
      triggerClassName,
      ...rest
    },
    ref,
  ) => {
    return (
      <Listbox ref={ref} value={value} onChange={onChange} multiple disabled={disabled} {...rest}>
        {({ open }) => (
          <div className={className}>
            {label && (
              <MultiSelectLabel htmlFor="MultiSelect-input" required={required} optional={optional}>
                {label}
              </MultiSelectLabel>
            )}
            <div className="relative mt-1">
              <MultiSelectTrigger
                placeholder={placeholder ? placeholder : 'Placeholder'}
                className={triggerClassName}
              />
              <Transition
                as={Fragment}
                show={open}
                enter="transition ease-out duration-400"
                enterFrom="transform opacity-0 translate-y-1"
                enterTo="transform opacity-100 translate-y-0"
              >
                {children}
              </Transition>
            </div>
          </div>
        )}
      </Listbox>
    )
  },
)

const MultiSelect: React.FC<MultiSelectProps> & {
  Label: typeof MultiSelectLabel
  Option: typeof MultiSelectOption
  Options: typeof MultiSelectOptions
  Trigger: typeof MultiSelectTrigger
} = Object.assign(MultiSelectRoot, {
  Label: MultiSelectLabel,
  Option: MultiSelectOption,
  Options: MultiSelectOptions,
  Trigger: MultiSelectTrigger,
})

export { MultiSelectLabel, MultiSelectOption, MultiSelectOptions, MultiSelectRoot, MultiSelectTrigger }
export default MultiSelect
