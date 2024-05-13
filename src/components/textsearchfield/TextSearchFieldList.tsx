'use client'

import { classNames } from '@/styles/styling'
import * as React from 'react'
import { forwardRef, useContext, type ComponentPropsWithoutRef, type ElementRef, type ReactElement } from 'react'
import { Command } from '../command'
import { TextSearchFieldContext } from './TextSearchField'

interface TextSearchFieldListProps extends ComponentPropsWithoutRef<typeof Command.List> {
  children: Array<ReactElement<typeof Command.Item>> | ReactElement<typeof Command.Item>
}

const TextSearchFieldList = forwardRef<ElementRef<typeof Command.List>, TextSearchFieldListProps>(
  ({ children, className, ...props }, ref) => {
    const { open } = useContext(TextSearchFieldContext)

    if (!open) {
      return null
    }

    return (
      <div className="relative">
        <Command.List
          className={classNames(
            'absolute z-50 mt-1 flex max-h-96 w-full flex-col gap-y-1 overflow-auto rounded-8 bg-white p-2 text-sm shadow-100 outline-none ring-1 ring-gray-900 ring-opacity-5',
            className,
          )}
          {...props}
          ref={ref}
        >
          {children}
        </Command.List>
      </div>
    )
  },
)

TextSearchFieldList.displayName = 'TextSearchFieldList'
export default TextSearchFieldList
