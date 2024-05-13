'use client'

import { HOVER_STYLES } from '@/styles/hover'
import { classNames } from '@/styles/styling'
import { Listbox } from '@headlessui/react'
import React, { type ComponentPropsWithoutRef, forwardRef } from 'react'
import { Checkbox } from '../checkbox'
import { Typography } from '../typography'

export interface MultiSelectOptionProps extends ComponentPropsWithoutRef<typeof Listbox.Option> {
  children?: string
  className?: string
  checkbox?: boolean
}

const MultiSelectOption = forwardRef<React.ElementRef<typeof Listbox.Option>, MultiSelectOptionProps>(
  ({ className, children, checkbox = false, ...rest }, ref) => {
    return (
      <Listbox.Option
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
              'focus-visible-ring-accent-orange-600 relative flex cursor-default items-center rounded-lg px-4 py-[6px] outline-none ',
            )}
          >
            {checkbox && <Checkbox checked={selected} className={'inset-top-2 absolute left-0 !h-4 !w-4'} />}
            <Typography className="ml-4">{children}</Typography>
          </div>
        )}
      </Listbox.Option>
    )
  },
)
export default MultiSelectOption
