import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import type { LogoProps } from '../ib/LogoIB'
import LogoVUM from './LogoVUM'

const meta: Meta<typeof LogoVUM> = {
  title: 'Interface/Logo/VUM',
  component: LogoVUM,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof LogoVUM>
interface StoryProps {
  variants: LogoProps['variant'][]
}

export const Logo: Story = {
  //@ts-ignore
  render: ({ variants }: StoryProps) => (
    <div className="max-w-sm space-y-md">
      {variants.map((variant) => (
        <LogoVUM key={variant} variant={variant} />
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
