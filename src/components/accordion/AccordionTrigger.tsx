'use client'

import { classNames } from '@/styles/styling'
import { AccordionHeader, AccordionTrigger as RadixAccordionTrigger } from '@radix-ui/react-accordion'
import { ChevronRight } from 'lucide-react'
import React, { forwardRef } from 'react'

const AccordionTrigger = forwardRef<
  React.ElementRef<typeof RadixAccordionTrigger>,
  React.ComponentPropsWithoutRef<typeof RadixAccordionTrigger>
>(({ className, children, ...props }, ref) => (
  <AccordionHeader className="flex">
    <RadixAccordionTrigger
      ref={ref}
      className={classNames(
        'group flex flex-1 items-center gap-x-2 py-4 font-medium text-primary-600 transition-all hover:text-accent-orange-600 hover:underline data-[state=open]:text-accent-orange-600 [&[data-state=open]>svg]:rotate-90 [&[data-state=open]>svg]:stroke-accent-orange-600',
        className,
      )}
      {...props}
    >
      <ChevronRight className="stroke-primary-600 transition-transform duration-300 group-hover:stroke-accent-orange-600 h-4 w-4" />
      {children}
    </RadixAccordionTrigger>
  </AccordionHeader>
))

AccordionTrigger.displayName = RadixAccordionTrigger.displayName
export default AccordionTrigger
