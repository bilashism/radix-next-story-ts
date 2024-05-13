import { cva } from 'class-variance-authority'

export const portalVariants = cva('fixed inset-0 z-50 flex', {
  variants: {
    position: {
      top: 'items-start',
      bottom: 'items-end',
      left: 'justify-start',
      right: 'justify-end',
    },
  },
  defaultVariants: { position: 'right' },
})

export const panelVariants = cva('fixed z-50 scale-100 gap-4 bg-white shadow-300 p-6', {
  variants: {
    position: {
      top: 'animate-slideInFromTop w-full',
      bottom: 'animate-slideInFromBottom w-full',
      left: 'animate-slideInFromLeft h-full',
      right: 'animate-slideInFromRight h-full',
    },
    size: {
      content: '',
      sm: '',
      lg: '',
      xl: '',
      full: '',
    },
  },
  compoundVariants: [
    {
      position: ['top', 'bottom'],
      size: 'content',
      class: 'max-h-screen',
    },
    {
      position: ['top', 'bottom'],
      size: 'sm',
      class: 'h-1/4',
    },
    {
      position: ['top', 'bottom'],
      size: 'lg',
      class: 'h-1/2',
    },
    {
      position: ['top', 'bottom'],
      size: 'xl',
      class: 'h-5/6',
    },
    {
      position: ['top', 'bottom'],
      size: 'full',
      class: 'h-screen',
    },
    {
      position: ['right', 'left'],
      size: 'content',
      class: 'max-w-screen',
    },
    {
      position: ['right', 'left'],
      size: 'sm',
      class: 'w-1/4',
    },
    {
      position: ['right', 'left'],
      size: 'lg',
      class: 'w-1/2',
    },
    {
      position: ['right', 'left'],
      size: 'xl',
      class: 'w-5/6',
    },
    {
      position: ['right', 'left'],
      size: 'full',
      class: 'w-screen',
    },
  ],
})
