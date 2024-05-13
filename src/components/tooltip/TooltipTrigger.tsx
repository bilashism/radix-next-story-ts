'use client'

import { TooltipTrigger as RadixTooltipTrigger, type TooltipTriggerProps } from '@radix-ui/react-tooltip'
import React, { forwardRef } from 'react'

const TooltipTrigger = forwardRef<React.ElementRef<typeof RadixTooltipTrigger>, TooltipTriggerProps>(
  ({ ...props }, ref) => <RadixTooltipTrigger ref={ref} {...props} />,
)

export default TooltipTrigger
