'use client'

import { TooltipArrow as RadixTooltipArrow, type TooltipArrowProps } from '@radix-ui/react-tooltip'
import React, { type FC } from 'react'

const TooltipArrow: FC<TooltipArrowProps> = ({ ...props }) => {
  return <RadixTooltipArrow {...props} />
}

export default TooltipArrow
