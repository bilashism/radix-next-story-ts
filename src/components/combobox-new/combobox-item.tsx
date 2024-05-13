'use client'

import { HOVER_STYLES } from '@/styles'
import { classNames } from '@/styles/styling'
import type { Command } from 'cmdk'
import { CheckIcon } from 'lucide-react'
import React from 'react'
import { CommandItem } from '../command'
import { Typography } from '../typography'
import { useCombobox } from './combobox-provider'

export interface ComboboxItemProps extends React.ComponentPropsWithoutRef<typeof Command.Item> {
  value: string
  label: string
  className?: string
}

const ComboboxItem = ({ value, label, className, onSelect }: ComboboxItemProps) => {
  const { value: currentValue, handleValueChange } = useCombobox()

  const handleSelect = (value: string) => {
    handleValueChange(value)
    onSelect?.(value)
  }

  return (
    <CommandItem
      key={label}
      value={value}
      className={classNames(
        HOVER_STYLES,
        'relative flex cursor-default w-full break-all items-center rounded-8 pl-6 py-2 outline-none aria-selected:bg-accent-orange-100 aria-selected:rounded-8 aria-selected:text-accent-orange-800',
        className,
      )}
      onSelect={handleSelect}
    >
      <Typography as="span" variant="md/regular">
        {label}
      </Typography>
      <CheckIcon className={classNames('ml-auto size-3.5', currentValue === value ? 'opacity-100' : 'opacity-0')} />
    </CommandItem>
  )
}
export default ComboboxItem
