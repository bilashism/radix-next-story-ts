import React, { useCallback, useContext, useState } from 'react'

export interface ComboboxProviderProps {
  open?: boolean
  value?: string
  children: React.ReactNode
  onOpen?: () => void
  onClose?: () => void
  onValueChange?: (value: string) => void
  onOpenChange?: (open: boolean) => void
}

export interface ComboboxContextProps {
  open: boolean
  value: string
  handleOpenChange: (open: boolean) => void
  handleValueChange: (value: string) => void
}

export const ComboboxContext = React.createContext<ComboboxContextProps>({
  open: false,
  value: '',
  handleOpenChange: () => {},
  handleValueChange: () => {},
})

const ComboboxProvider = ({
  open: isOpen = false,
  value,
  onOpen,
  onClose,
  onOpenChange,
  onValueChange,
  children,
}: ComboboxProviderProps) => {
  const [open, setOpen] = useState(isOpen)
  const [currentValue, setCurrentValue] = useState(value)

  const handleOpenPopover = useCallback(() => {
    setOpen(true)
    onOpen?.()
  }, [])

  const handleClosePopover = useCallback(() => {
    setOpen(false)
    onClose?.()
  }, [])

  const handleOpenChange = useCallback(() => {
    if (open) {
      handleClosePopover()
    } else {
      handleOpenPopover()
    }
    onOpenChange?.(open)
  }, [open])

  const handleResetValue = () => {
    onValueChange?.('')
    setCurrentValue('')
  }

  const handleValueChange = (value: string) => {
    if (value === currentValue) {
      handleResetValue()
    } else {
      onValueChange?.(value)
      setCurrentValue(value)
    }
  }

  return (
    <ComboboxContext.Provider
      value={{
        handleValueChange,
        handleOpenChange,
        open,
        value: currentValue ?? '',
      }}
    >
      {children}
    </ComboboxContext.Provider>
  )
}

export const useCombobox = () => {
  const context = useContext(ComboboxContext)
  if (context === undefined) {
    throw new Error('useSidebar must be used within a ComboboxProvider')
  }
  return context
}

export default ComboboxProvider
