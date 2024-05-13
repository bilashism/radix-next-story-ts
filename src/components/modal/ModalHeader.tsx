'use client'

import { classNames } from '@/styles/styling'
import React from 'react'

const ModalHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={classNames('flex flex-col space-y-1.5 text-center sm:text-left', className)} {...props} />
)
ModalHeader.displayName = 'ModalHeader'
export default ModalHeader
