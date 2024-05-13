import { classNames } from '@/styles/styling'
import type { ExtractProps } from '@/types'
import { Combobox as HeadlessCombobox } from '@headlessui/react'
import React, { forwardRef } from 'react'

export type ComboboxOptionsProps = ExtractProps<typeof HeadlessCombobox.Options> & {
  className?: string
}

const ComboboxOptions: React.FC<ComboboxOptionsProps> = forwardRef<
  React.ElementRef<typeof HeadlessCombobox.Options>,
  ComboboxOptionsProps
>(({ className, ...rest }, ref) => {
  return (
    <HeadlessCombobox.Options
      ref={ref}
      className={classNames(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        className,
        'absolute z-50 mt-1 flex max-h-96 w-full flex-col gap-y-1 overflow-auto rounded-8 bg-white p-2 text-sm shadow-100 outline-none ring-1 ring-gray-900 ring-opacity-5',
      )}
      {...rest}
    />
  )
})

export default ComboboxOptions
