'use client'

import { classNames } from '@/styles/styling'
import * as React from 'react'
import { forwardRef, type ElementRef } from 'react'
import { Command } from '../command'

interface TextSearchFieldListEmptyProps extends React.ComponentPropsWithoutRef<typeof Command.Empty> {}

const TextSearchFieldListEmpty = forwardRef<ElementRef<typeof Command.Empty>, TextSearchFieldListEmptyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Command.Empty ref={ref} className={classNames('p-2', className)} {...props}>
        {children}
      </Command.Empty>
    )
  },
)
export default TextSearchFieldListEmpty
