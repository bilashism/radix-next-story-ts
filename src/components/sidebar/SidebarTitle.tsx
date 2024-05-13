'use client'

import { classNames } from '@/styles/styling'
import { ChevronLeft } from 'lucide-react'
import React from 'react'
import { Button } from '../button'
import { useSidebar } from './SidebarContext'

export interface SidebarTitleProps {
  children?: React.ReactNode
}

const SidebarTitle: React.FC<SidebarTitleProps> = ({ children }) => {
  const { handleCloseSidebar } = useSidebar()

  const hasChildren = React.Children.count(children) > 0

  return (
    <>
      <div className={classNames(hasChildren ? 'justify-between' : 'justify-end', 'flex items-center px-5 pt-5')}>
        {children}
        <Button variant="md/base" onClick={handleCloseSidebar} className="!p-2">
          <ChevronLeft className="-ml-1 h-5 w-5 stroke-primary-400 hover:!stroke-accent-orange-600" />
        </Button>
      </div>
      <hr className="bg-primary-300" />
    </>
  )
}
export default SidebarTitle
