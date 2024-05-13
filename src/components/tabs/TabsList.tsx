'use client'

import { classNames } from '@/styles/styling'
import { TabsList as RadixTabsList } from '@radix-ui/react-tabs'
import React, { forwardRef } from 'react'

const TabsList = forwardRef<
  React.ElementRef<typeof RadixTabsList>,
  React.ComponentPropsWithoutRef<typeof RadixTabsList>
>(({ className, ...props }, ref) => (
  <RadixTabsList ref={ref} className={classNames('flex items-center border-b', className)} {...props} />
))
TabsList.displayName = RadixTabsList.displayName
export default TabsList
