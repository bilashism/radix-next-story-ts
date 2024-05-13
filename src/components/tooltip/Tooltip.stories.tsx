import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Button } from '../button/Button'
import { Tooltip } from './Tooltip'

const meta = {
  title: 'Interface/Tooltip',
  component: Tooltip,
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof Tooltip>

export const Main: Story = {
  render: () => (
    <Tooltip>
      <Tooltip.Trigger asChild>
        <Button variant="md/primary">Hover me</Button>
      </Tooltip.Trigger>
      <Tooltip.Content>
        <p className="text-primary">Add to library</p>
        <Tooltip.Arrow width={26} height={14} className="fill-white" />
      </Tooltip.Content>
    </Tooltip>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export const Small: Story = {
  render: () => (
    <Tooltip>
      <Tooltip.Trigger asChild>
        <Button variant="md/primary">Hover me</Button>
      </Tooltip.Trigger>
      <Tooltip.Content size="sm">
        <p className="text-primary">
          This is some very small text. This is more small text. This is some very small text. This is more small text.
          This is some very small text. This is more small text.{' '}
        </p>
        <Tooltip.Arrow width={26} height={14} className="fill-white" />
      </Tooltip.Content>
    </Tooltip>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export const Medium: Story = {
  render: () => (
    <Tooltip>
      <Tooltip.Trigger asChild>
        <Button variant="md/primary">Hover me</Button>
      </Tooltip.Trigger>
      <Tooltip.Content size="md">
        <p className="text-primary">
          This is some very medium text. This is more medium text. This is some very medium text. This is more medium
          text. This is some very medium text. This is more medium text.{' '}
        </p>
        <Tooltip.Arrow width={26} height={14} className="fill-white" />
      </Tooltip.Content>
    </Tooltip>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export const Large: Story = {
  render: () => (
    <Tooltip>
      <Tooltip.Trigger asChild>
        <Button variant="md/primary">Hover me</Button>
      </Tooltip.Trigger>
      <Tooltip.Content size="lg">
        <p className="text-primary">
          This is some very large text. This is more large text. This is some very large text. This is more large text.
          This is some very large text. This is more large text.{' '}
        </p>
        <Tooltip.Arrow width={26} height={14} className="fill-white" />
      </Tooltip.Content>
    </Tooltip>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
}
