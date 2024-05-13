'use client'

import React from 'react'
import { Toaster as Sonner, toast } from 'sonner'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ position, theme, ...props }: ToasterProps) => {
  return (
    <Sonner
      theme={theme ? theme : 'light'}
      className="toaster group"
      position={position ? position : 'bottom-right'}
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          title: 'group-[.toast]:text-md',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        },
      }}
      {...props}
    />
  )
}

export default Toaster
export { toast, type ToasterProps } // export toast function for convenience
