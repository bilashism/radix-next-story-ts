'use client'

import React from 'react'
import Popover from '../popover/Popover'
import type { ComboboxProviderProps } from './combobox-provider'
import ComboboxProvider, { useCombobox } from './combobox-provider'

export interface ComboboxRootProps extends React.PropsWithChildren<ComboboxProviderProps> {}

const ComboboxRoot = ({ children, ...rest }: ComboboxRootProps) => {
  return (
    <ComboboxProvider {...rest}>
      <ComboboxBase>{children}</ComboboxBase>
    </ComboboxProvider>
  )
}

const ComboboxBase = ({ children }: React.PropsWithChildren) => {
  const { open, handleOpenChange } = useCombobox()

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      {children}
    </Popover>
  )
}

export default ComboboxRoot
