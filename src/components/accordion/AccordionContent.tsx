'use client'

import { classNames } from '@/styles/styling'
import { AccordionContent as RadixAccordionContent } from '@radix-ui/react-accordion'
import React, { forwardRef } from 'react'
import { Typography } from '../typography'

const AccordionContent = forwardRef<
  React.ElementRef<typeof RadixAccordionContent>,
  React.ComponentPropsWithoutRef<typeof RadixAccordionContent>
>(({ className, children, ...props }, ref) => (
  <RadixAccordionContent
    ref={ref}
    className={classNames(
      'overflow-hidden transition-all data-[state=closed]:animate-accordionUp data-[state=open]:animate-accordionDown',
      className,
    )}
    {...props}
  >
    <div className="py-2">
      <Typography as="span">{children}</Typography>
    </div>
  </RadixAccordionContent>
))

AccordionContent.displayName = RadixAccordionContent.displayName
export default AccordionContent
