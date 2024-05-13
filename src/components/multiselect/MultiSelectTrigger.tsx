'use client'

import { INPUT_STYLES, ROOT_INPUT_STYLES } from '@/styles/input'
import { classNames } from '@/styles/styling'
import type { ExtractProps } from '@/types'
import { Listbox } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'
import React from 'react'
import { Typography } from '../typography'

export interface MultiSelectTriggerProps extends ExtractProps<typeof Listbox.Button> {
  error?: boolean
  disabled?: boolean
  placeholder?: string
  className?: string
}

const MultiSelectTrigger: React.FC<MultiSelectTriggerProps> = ({
  error,
  disabled,
  placeholder,
  className,
  ...rest
}) => {
  return (
    <Listbox.Button
      className={classNames(
        ROOT_INPUT_STYLES,
        error ? `${INPUT_STYLES.error} !text-feedback-red-600 [&>svg]:!text-feedback-red-600` : '',
        disabled ? INPUT_STYLES.disabled : '',
        'justify-between gap-4 py-3 px-3.5 [&[data-headlessui-state=open]>svg]:rotate-180 [&[data-headlessui-state=open]>svg]:!text-accent-orange-500',
        className,
      )}
      {...rest}
    >
      <Typography as="span" className="text-placeholderColor">
        {placeholder}
      </Typography>
      <ChevronDown className="!h-4 !w-4 transition-transform duration-150" />
    </Listbox.Button>
  )
}
export default MultiSelectTrigger
