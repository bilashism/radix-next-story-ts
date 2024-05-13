import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import LargeHeading, { type LargeHeadingProps } from './LargeHeading'

const meta: Meta<typeof LargeHeading> = {
  title: 'Interface/Typography/Special',
  component: LargeHeading,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['light', 'heavy'],
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof LargeHeading>

interface StoryProps {
  variants: LargeHeadingProps['variant'][]
}

export const HeadingLarge: Story = {
  //@ts-ignore
  render: ({ variants }: StoryProps) => (
    <div className="space-y-sm">
      {variants.map((variant) => (
        <LargeHeading key={variant} variant={variant}>
          {variant}
        </LargeHeading>
      ))}
    </div>
  ),
  args: {
    //@ts-ignore
    variants: ['heavy', 'light'],
  },
}
