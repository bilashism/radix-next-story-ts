'use client'

import { classNames } from '@/styles/styling'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import * as React from 'react'

export interface PopoverContentProps extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {
  /**
   * Whether to display an arrow
   */
  arrow?: boolean
}

const PopoverRoot = PopoverPrimitive.Root
const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef<React.ElementRef<typeof PopoverPrimitive.Content>, PopoverContentProps>(
  ({ className, children, align = 'center', sideOffset = 4, arrowPadding = 4, arrow, ...props }, ref) => (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        arrowPadding={arrowPadding}
        className={classNames(
          'group z-50 rounded-8 bg-white bg-opacity-100 p-4 text-primary-800 shadow-100 outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className,
        )}
        {...props}
      >
        {children}
        {arrow && <PopoverPrimitive.Arrow width={26} height={14} className="fill-white z-50" />}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  ),
)
PopoverContent.displayName = PopoverPrimitive.Content.displayName

const Popover: React.FC<PopoverPrimitive.PopoverProps> & {
  Content: typeof PopoverContent
  Trigger: typeof PopoverTrigger
} = Object.assign(PopoverRoot, {
  Content: PopoverContent,
  Trigger: PopoverTrigger,
})

export { PopoverContent, PopoverRoot, PopoverTrigger }
export default Popover
