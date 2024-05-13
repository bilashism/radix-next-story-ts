import React from 'react'

import { classNames } from '@/styles/styling'
import { Command, type CommandInputProps } from '../command'
import { PopoverContent } from '../popover'

export interface ComboboxItemListProps extends CommandInputProps {
  placeholder: string
  emptyMessage?: string
}

const ComboboxItemList = ({
  placeholder,
  children,
  emptyMessage,
  className,
  value,
  onValueChange,
  ...rest
}: ComboboxItemListProps) => {
  return (
    <PopoverContent className={classNames('no-scrollbar max-h-96 overflow-y-auto', className)}>
      <Command>
        <Command.Input
          {...rest}
          placeholder={placeholder}
          value={value}
          onValueChange={onValueChange}
          data-cy="combobox-input"
        />
        <Command.Empty>{emptyMessage ? emptyMessage : 'Geen opties gevonden'}</Command.Empty>
        <Command.Group>{children}</Command.Group>
      </Command>
    </PopoverContent>
  )
}

export default ComboboxItemList
