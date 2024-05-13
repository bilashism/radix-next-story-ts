'use client'

import { classNames } from '@/styles/styling'
import { DropdownMenuContent, DropdownMenuPortal } from '@radix-ui/react-dropdown-menu'
import React, { forwardRef } from 'react'

const DropdownContent = forwardRef<
  React.ElementRef<typeof DropdownMenuContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuContent>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPortal>
    <DropdownMenuContent
      ref={ref}
      sideOffset={sideOffset}
      className={classNames(
        'min-w-[220px] rounded-12 bg-white p-1 shadow-100 will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade',
        className,
      )}
      {...props}
    />
  </DropdownMenuPortal>
))

DropdownContent.displayName = DropdownMenuContent.displayName
export default DropdownContent
