'use client'

import { classNames } from '@/styles/styling'
import React from 'react'
import { Button } from '../button'
import { useSidebar } from './SidebarContext'

const SidebarTrigger: React.FC<React.ComponentPropsWithoutRef<typeof Button>> = ({ onClick, className, ...rest }) => {
  const { open, handleOpenSidebar } = useSidebar()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(e)
    handleOpenSidebar()
  }

  return <Button onClick={handleClick} className={classNames(open ? 'hidden' : '', className)} {...rest} />
}
SidebarTrigger.displayName = 'SidebarTrigger'
export default SidebarTrigger
