'use client'

import { Checkbox } from '@/components/checkbox'
import Typography from '@/components/typography/Typography'
import { HOVER_STYLES } from '@/styles/hover'
import { classNames } from '@/styles/styling'
import type { ExtractProps } from '@/types'
import { Combobox as HeadlessCombobox } from '@headlessui/react'
import React, { forwardRef } from 'react'

export interface ComboboxOptionProps extends ExtractProps<typeof HeadlessCombobox.Option> {
  children?: string
  className?: string
  checkbox?: boolean
}

const ComboboxOption = forwardRef<React.ElementRef<typeof HeadlessCombobox.Option>, ComboboxOptionProps>(
  ({ className, children, checkbox = false, ...rest }, ref) => {
    return (
      <HeadlessCombobox.Option
        ref={ref}
        className={({ active }: { active: boolean }) =>
          classNames(active ? 'text-primary-900' : '', 'border-b border-primary-200 last:border-b-0', className)
        }
        {...rest}
      >
        {({ selected }: { selected: boolean }) => (
          <div
            className={classNames(
              selected ? 'bg-accent-orange-100 text-primary-900 ring-2 ring-accent-orange-600' : 'text-primary-800',
              HOVER_STYLES,
              'focus-visible-ring-accent-orange-600 relative flex cursor-default items-center rounded-8 pl-6 py-2 outline-none ',
            )}
          >
            {checkbox && <Checkbox checked={selected} readOnly className={'inset-top-2 absolute left-2 !h-4 !w-4'} />}
            <Typography as="p" className="ml-4">
              {children}
            </Typography>
          </div>
        )}
      </HeadlessCombobox.Option>
    )
  },
)

export default ComboboxOption
