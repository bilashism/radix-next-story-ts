'use client'

import { classNames } from '@/styles/styling'
import { TabsContent as RadixTabsContent, type TabsContentProps as RadixTabsContentProps } from '@radix-ui/react-tabs'
import React, { forwardRef } from 'react'

export interface TabsContentProps extends RadixTabsContentProps {
  /*
   * Whether the content should be contained or not.
   */
  contained?: boolean
  children?: React.ReactNode
}

const TabsContent = forwardRef<React.ElementRef<typeof RadixTabsContent>, TabsContentProps>(
  ({ contained = false, className, children, ...props }, ref) => (
    <RadixTabsContent
      ref={ref}
      className={classNames(
        contained && 'px-6',
        'mt-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange-500 focus-visible:ring-offset-2',
        className,
      )}
      {...props}
    >
      {children}
    </RadixTabsContent>
  ),
)
TabsContent.displayName = RadixTabsContent.displayName
export default TabsContent
