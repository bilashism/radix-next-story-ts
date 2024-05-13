'use client'

import { HOVER_STYLES } from '@/styles/hover'
import { classNames } from '@/styles/styling'
import * as React from 'react'
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef, type ReactNode } from 'react'
import { Command } from '../command'
import { Typography } from '../typography'

interface TextSearchFieldListItemProps extends ComponentPropsWithoutRef<typeof Command.Item> {
  children: ReactNode
}

const TextSearchFieldListItem = forwardRef<ElementRef<typeof Command.Item>, TextSearchFieldListItemProps>(
  ({ children, value, ...props }, ref) => {
    const handleSelect = (e: string) => {
      props.onSelect?.(e)
      ;(document.activeElement as HTMLInputElement)?.blur()
    }

    return (
      <Command.Item
        ref={ref}
        value={value}
        onMouseDown={(e) => e.preventDefault()}
        {...props}
        className={classNames(
          HOVER_STYLES,
          'focus-visible-ring-accent-orange-600 relative flex cursor-default items-center rounded-8 pl-6 py-2 outline-none',
          'aria-selected:bg-accent-orange-100 aria-selected:rounded-8 aria-selected:text-accent-orange-800',
        )}
        onSelect={handleSelect}
      >
        <Typography as="span">{children}</Typography>
      </Command.Item>
    )
  },
)

TextSearchFieldListItem.displayName = 'TextSearchFieldListItem'
export default TextSearchFieldListItem
