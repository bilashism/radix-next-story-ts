'use client'

import { AccordionItem as RadixAccordionItem } from '@radix-ui/react-accordion'
import React, { forwardRef } from 'react'

const AccordionItem = forwardRef<
  React.ElementRef<typeof RadixAccordionItem>,
  React.ComponentPropsWithoutRef<typeof RadixAccordionItem>
>(({ className, ...props }, ref) => <RadixAccordionItem ref={ref} className={className} {...props} />)

AccordionItem.displayName = RadixAccordionItem.displayName
export default AccordionItem
