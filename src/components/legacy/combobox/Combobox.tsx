'use client'

import { classNames } from '@/styles/styling'
import type { ExtractProps } from '@/types'
import { Combobox as HeadlessCombobox, Transition } from '@headlessui/react'
import React, { Fragment, forwardRef } from 'react'
import ComboboxButton from './ComboboxButton'
import ComboboxInput from './ComboboxInput'
import ComboboxLabel from './ComboboxLabel'
import ComboboxOption from './ComboboxOption'
import ComboboxOptions from './ComboboxOptions'

export interface ComboboxProps extends ExtractProps<typeof HeadlessCombobox> {
  children: React.ReactElement<typeof HeadlessCombobox.Options>
  input: React.ReactElement<typeof ComboboxInput>
  label?: string | React.ReactElement<typeof ComboboxLabel>
  className?: string
  required?: boolean
  optional?: boolean
}

const ComboboxRoot = forwardRef<React.ElementRef<typeof HeadlessCombobox>, ComboboxProps>(
  ({ value, onChange, className, disabled, label, children, input, ...rest }, ref) => {
    return (
      <HeadlessCombobox ref={ref} value={value} onChange={onChange} disabled={disabled} {...rest}>
        {({ open }) => (
          <div className={classNames(className)}>
            {label && label}
            <div className="relative mt-1">
              {input}
              <Transition
                as={Fragment}
                show={open}
                enter="transition ease-out duration-400"
                enterFrom="transform opacity-0 translate-y-1"
                enterTo="transform opacity-100 translate-y-0"
              >
                {children}
              </Transition>
              <ComboboxButton iconClassName={classNames(open ? '!stroke-accent-orange-600 rotate-180' : '', 'mr-2')} />
            </div>
          </div>
        )}
      </HeadlessCombobox>
    )
  },
)

const Combobox: React.FC<ComboboxProps> & {
  Input: typeof ComboboxInput
  Label: typeof ComboboxLabel
  Option: typeof ComboboxOption
  Options: typeof ComboboxOptions
} = Object.assign(ComboboxRoot, {
  Input: ComboboxInput,
  Label: ComboboxLabel,
  Option: ComboboxOption,
  Options: ComboboxOptions,
})

export { ComboboxInput, ComboboxLabel, ComboboxOption, ComboboxOptions, ComboboxRoot }
export default Combobox
