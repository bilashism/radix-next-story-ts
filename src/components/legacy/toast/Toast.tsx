'use client'

// taken from https://ui.shadcn.com/docs/components/toast
import { classNames } from '@/styles/styling'
import * as ToastPrimitives from '@radix-ui/react-toast'
import { X } from 'lucide-react'
import React, { forwardRef } from 'react'
import { Heading } from '../../heading'
import { Typography } from '../../typography'

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={classNames(
      'fixed top-14 z-[100] flex max-h-screen w-full justify-end p-4 sm:bottom-0 sm:top-auto sm:flex-col sm:items-end',
      className,
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const Toast = forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root>
>(({ ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className="group pointer-events-auto relative flex w-fit items-center justify-between space-x-4 overflow-hidden rounded-8 bg-primary-600 p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=closed]:sm:slide-out-to-right-full data-[state=open]:sm:slide-in-from-right-full"
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={classNames(
      'ring-offset-background hover:bg-secondary focus:ring-ring group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      className,
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={classNames(
      'absolute right-2 top-2 rounded-full p-2 opacity-0 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white group-hover:bg-white/10 group-hover:opacity-100',
      className,
    )}
    toast-close=""
    {...props}
  >
    <X className="!stroke-white w-2 h-2" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, children, ...props }, ref) => (
  <ToastPrimitives.Title ref={ref} asChild {...props}>
    <Heading variant="h4" className={classNames('!text-white', className)}>
      {children}
    </Heading>
  </ToastPrimitives.Title>
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, children, ...props }, ref) => (
  <ToastPrimitives.Description ref={ref} asChild {...props}>
    <Typography className={classNames('!text-white', className)}>{children}</Typography>
  </ToastPrimitives.Description>
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>
type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  type ToastActionElement,
  type ToastProps,
}
