'use client'

import { classNames } from '@/styles/styling'
import React from 'react'

interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  footerClassName?: string
}

const ModalFooter = ({ footerClassName, className, children, ...props }: ModalFooterProps) => {
  return (
    <div className={footerClassName}>
      <hr className="scale-110 border-primary-200 pt-4" />
      <div className={classNames('flex items-center justify-end gap-2', className)} {...props}>
        {children}
      </div>
    </div>
  )
}
ModalFooter.displayName = 'ModalFooter'
export default ModalFooter
