import { type Meta, type StoryObj } from '@storybook/react'
import React from 'react'
import Button from '../button/Button'
import Notification from './Notification'

const meta: Meta<typeof Notification> = {
  title: 'Interface/Notification',
  component: Notification,
}

type Story = StoryObj<typeof Notification>

export default meta

export const Info: Story = {
  args: {
    variant: 'info',
    header: 'Header',
    children: 'Text',
    button: <Button variant="sm/primary">Button</Button>,
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    header: 'Header',
    children: 'Notification',
    button: <Button variant="sm/primary">Button</Button>,
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    header: 'Header',
    children: 'Notification',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    header: 'Header',
    children: 'Notification',
  },
}
