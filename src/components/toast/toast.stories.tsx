import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { toast } from 'sonner'
import Button from '../button/Button'
import { Toaster } from './toast'

const meta = {
  title: 'Interface/Toast',
  component: Toaster,
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof Toaster>

export const Primary: Story = {
  render: () => (
    <div>
      <Toaster />
      <Button
        onClick={() =>
          toast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Show Toast
      </Button>
    </div>
  ),
}

export const State: Story = {
  render: () => (
    <div className="space-y-8">
      <Toaster />
      <Button
        onClick={() =>
          toast.success('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Show Success
      </Button>
      <Button
        onClick={() =>
          toast.error('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Show Error
      </Button>
      <Button
        onClick={() =>
          toast.info('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Show Info
      </Button>
      <Button
        onClick={() =>
          toast.warning('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Show Warning
      </Button>
    </div>
  ),
}

export const RichColors: Story = {
  title: 'Rich Colors',
  render: () => (
    <div className="space-y-8">
      <Toaster richColors />
      <Button
        onClick={() =>
          toast.success('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Show Success
      </Button>
      <Button
        onClick={() =>
          toast.error('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Show Error
      </Button>
      <Button
        onClick={() =>
          toast.info('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Show Info
      </Button>
      <Button
        onClick={() =>
          toast.warning('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Show Warning
      </Button>
    </div>
  ),
}
