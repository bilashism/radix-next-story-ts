import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import Label from './Label'
import LabelSecondary, { type LabelSecondaryProps } from './LabelSecondary'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Label> = {
  title: 'Interface/Label',
  component: Label,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Label>

export const Main: Story = {
  args: {
    htmlFor: 'test',
    children: 'Label',
  },
}

export const Optional: Story = {
  args: {
    htmlFor: 'test',
    children: 'Niet verplicht',
    optional: true,
  },
}

export const Required: Story = {
  args: {
    htmlFor: 'test',
    children: 'Required',
    required: true,
  },
}

type StoryLabelSecondary = StoryObj<typeof LabelSecondary>

export const Secondary: StoryLabelSecondary = {
  render: ({ children }: LabelSecondaryProps) => <LabelSecondary>{children}</LabelSecondary>,
  args: {
    children: 'Secondary',
  },
}
