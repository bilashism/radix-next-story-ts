import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import type { LogoProps } from './LogoIB'
import LogoIB from './LogoIB'
import LogoIBVertical from './LogoIBVertical'
import LogoIBWithTagline from './LogoIBWithTagline'

const meta: Meta<typeof LogoIB> = {
  title: 'Interface/Logo/IB',
  component: LogoIB,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof LogoIB>
interface StoryProps {
  variants: LogoProps['variant'][]
}

export const Logo: Story = {
  //@ts-ignore
  render: ({ variants }: StoryProps) => (
    <div className="max-w-sm space-y-md">
      {variants.map((variant) => (
        <LogoIB key={variant} variant={variant} />
      ))}
    </div>
  ),
  args: {
    //@ts-ignore
    variants: ['light', 'dark'],
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export const LogoWithTagline: Story = {
  //@ts-ignore
  render: ({ variants }: StoryProps) => (
    <div className="max-w-sm space-y-md">
      {variants.map((variant) => (
        <LogoIBWithTagline key={variant} variant={variant} />
      ))}
    </div>
  ),
  args: {
    //@ts-ignore
    variants: ['light', 'dark'],
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export const LogoVertical: Story = {
  //@ts-ignore
  render: ({ variants }: StoryProps) => (
    <div className="max-w-sm space-y-md">
      {variants.map((variant) => (
        <LogoIBVertical key={variant} variant={variant} />
      ))}
    </div>
  ),
  args: {
    //@ts-ignore
    variants: ['light', 'dark'],
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}
