'use client'

import * as React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'

import { classNames } from '@/styles/styling'

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={classNames(
      'relative h-4 w-6 cursor-default rounded-full bg-black/20 outline-none focus:ring-2 focus:ring-black data-[state=checked]:bg-accent-orange-600',
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={classNames(
        'block h-3 w-3 translate-x-0.5 rounded-full bg-white transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[10px]',
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
