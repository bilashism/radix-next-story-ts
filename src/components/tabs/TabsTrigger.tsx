'use client'

import { classNames } from '@/styles/styling'
import { TabsTrigger as RadixTabsTrigger } from '@radix-ui/react-tabs'
import React, { forwardRef } from 'react'
import { Heading } from '../heading'

const TabsTrigger = forwardRef<
  React.ElementRef<typeof RadixTabsTrigger>,
  React.ComponentPropsWithoutRef<typeof RadixTabsTrigger>
>(({ children, className, ...props }, ref) => (
  <RadixTabsTrigger ref={ref} {...props} asChild>
    <Heading
      variant="h4"
      as="button"
      className={classNames(
        'cursor-pointer whitespace-nowrap rounded-t-lg bg-transparent bg-opacity-0 px-5 py-4 text-primary-500 transition duration-300 hover:bg-neutral-100 hover:bg-opacity-100 disabled:pointer-events-none disabled:bg-transparent disabled:text-primary-400 data-[state=active]:border-b-2 data-[state=active]:border-accent-orange-500 data-[state=active]:!text-primary-600',
        className,
      )}
    >
      {children}
    </Heading>
  </RadixTabsTrigger>
))
TabsTrigger.displayName = RadixTabsTrigger.displayName
export default TabsTrigger
