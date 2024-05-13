'use client'

import { classNames } from '@/styles/styling'
import { TooltipContent as RadixTooltipContent } from '@radix-ui/react-tooltip'
import React, { forwardRef } from 'react'

export const CONTENT_SIZES = {
  sm: 'max-w-[210px]',
  md: 'max-w-[320px]',
  lg: 'max-w-[460px]',
} as const

export interface TooltipContentProps extends React.ComponentPropsWithoutRef<typeof RadixTooltipContent> {
  size?: 'sm' | 'md' | 'lg'
  sideOffset?: number
  className?: string
}

const TooltipContent = forwardRef<React.ElementRef<typeof RadixTooltipContent>, TooltipContentProps>(
  ({ className, size = 'sm', sideOffset = 4, ...rest }, ref) => (
    <RadixTooltipContent
      ref={ref}
      sideOffset={sideOffset}
      className={classNames(
        className,
        CONTENT_SIZES[size],
        'flex select-none items-center justify-center rounded-md bg-white px-[14px] py-[10px] shadow-100 will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade',
      )}
      {...rest}
    />
  ),
)
export default TooltipContent
