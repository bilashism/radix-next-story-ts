'use client'

import React, { useCallback, useContext, useState } from 'react'

export const SidebarContext = /*#__PURE__*/ React.createContext({
  open: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleCloseSidebar: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleOpenSidebar: () => {},
})

export interface SidebarProviderProps {
  open?: boolean
  onOpen?: () => void
  onClose?: () => void
  children: React.ReactNode
}

const SidebarProvider = ({ open = false, onOpen, onClose, children }: SidebarProviderProps) => {
  const [isOpen, setIsOpen] = useState(open)

  const handleOpenSidebar = useCallback(() => {
    onOpen?.()
    setIsOpen(true)
  }, [])

  const handleCloseSidebar = () => {
    onClose?.()
    setIsOpen(false)
  }

  return (
    <SidebarContext.Provider value={{ handleCloseSidebar, handleOpenSidebar, open: isOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => {
  const context = useContext(SidebarContext)
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}

export default SidebarProvider
