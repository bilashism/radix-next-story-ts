import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Typography, type TypographyVariant } from './Typography'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Typography> = {
  title: 'Interface/Typography/Main',
  component: Typography,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Typography>

interface StoryProps {
  variants: TypographyVariant[]
}

export const Small: Story = {
  //@ts-ignore
  render: ({ variants }: StoryProps) => (
    <div className="flex flex-col space-y-sm">
      {variants.map((variant) => (
        <Typography key={variant} variant={variant}>
          {variant}
        </Typography>
      ))}
    </div>
  ),
  args: {
    //@ts-ignore
    variants: ['sm/italic', 'sm/regular', 'sm/semibold', 'sm/bold'],
  },
}

export const Medium: Story = {
  //@ts-ignore
  render: ({ variants }: StoryProps) => (
    <div className="flex flex-col space-y-sm">
      {variants.map((variant) => (
        <Typography key={variant} variant={variant}>
          {variant}
        </Typography>
      ))}
    </div>
  ),
  args: {
    //@ts-ignore
    variants: ['md/italic', 'md/regular', 'md/semibold', 'md/bold'],
  },
}

export const Large: Story = {
  //@ts-ignore
  render: ({ variants }: StoryProps) => (
    <div className="flex flex-col space-y-sm">
      {variants.map((variant) => (
        <Typography key={variant} variant={variant}>
          {variant}
        </Typography>
      ))}
    </div>
  ),
  args: {
    //@ts-ignore
    variants: ['lg/italic', 'lg/regular', 'lg/semibold', 'lg/bold'],
  },
}

export const ExtraLarge: Story = {
  //@ts-ignore
  render: ({ variants }: StoryProps) => (
    <div className="flex flex-col space-y-sm">
      {variants.map((variant) => (
        <Typography key={variant} variant={variant}>
          {variant}
        </Typography>
      ))}
    </div>
  ),
  args: {
    //@ts-ignore
    variants: ['xl/italic', 'xl/regular', 'xl/semibold', 'xl/bold'],
  },
}
