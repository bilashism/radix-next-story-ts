'use client'

import {
  Tooltip as RadixTooltip,
  TooltipProvider,
  type TooltipProps,
  type TooltipProviderProps,
} from '@radix-ui/react-tooltip'
import React, { type FC } from 'react'
import TooltipArrow from './TooltipArrow'
import TooltipContent from './TooltipContent'
import TooltipTrigger from './TooltipTrigger'

export interface TooltipRootProps extends Omit<TooltipProviderProps, 'delayDuration'>, Omit<TooltipProps, 'children'> {}

const TooltipRoot: FC<TooltipRootProps> = ({ children, skipDelayDuration, ...rest }) => {
  return (
    <TooltipProvider skipDelayDuration={skipDelayDuration}>
      <RadixTooltip {...rest}>{children}</RadixTooltip>
    </TooltipProvider>
  )
}

const Tooltip: FC<TooltipRootProps> & {
  Trigger: typeof TooltipTrigger
  Content: typeof TooltipContent
  Arrow: typeof TooltipArrow
} = Object.assign(TooltipRoot, {
  Trigger: TooltipTrigger,
  Content: TooltipContent,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  Arrow: TooltipArrow,
})

export { TooltipArrow, TooltipContent, TooltipRoot, TooltipTrigger }
export default Tooltip
