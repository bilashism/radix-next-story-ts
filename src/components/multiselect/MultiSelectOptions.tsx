'use client'

import { classNames } from '@/styles/styling'
import type { ExtractProps } from '@/types'
import { Listbox } from '@headlessui/react'
import React, { forwardRef } from 'react'

export type MultiSelectOptionsProps = ExtractProps<typeof Listbox.Options> & {
  className?: string
}

const MultiSelectOptions: React.FC<MultiSelectOptionsProps> = forwardRef<
  React.ElementRef<typeof Listbox.Options>,
  MultiSelectOptionsProps
>(({ className, ...rest }, ref) => {
  return (
    <Listbox.Options
      ref={ref}
      className={classNames(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        className,
        'absolute z-50 mt-1 flex max-h-96 flex-col gap-y-1 overflow-auto rounded-lg bg-white p-1 text-sm shadow-100 outline-none ring-1 ring-gray-900 ring-opacity-5',
      )}
      {...rest}
    />
  )
})
export default MultiSelectOptions
