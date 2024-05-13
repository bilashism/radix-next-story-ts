'use client'

import { classNames } from '@/styles/styling'
import React from 'react'
import { useSidebar } from './SidebarContext'

const SidebarContent: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({ className, ...rest }) => {
  const { open } = useSidebar()

  return (
    <div
      className={classNames(
        className,
        open ? 'w-fit' : 'hidden',
        'h-screen animate-slideInFromLeft space-y-5 overflow-hidden bg-white shadow-300',
      )}
      {...rest}
    />
  )
}
export default SidebarContent
