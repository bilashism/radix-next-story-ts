import { type Meta, type StoryObj } from '@storybook/react'
import React from 'react'
import Button from '../button/Button'
import Alert from './Alert'

const meta: Meta<typeof Alert> = {
  title: 'Interface/Alert',
  component: Alert,
}

type Story = StoryObj<typeof Alert>

export default meta

export const Info: Story = {
  args: {
    variant: 'info',
    header: 'Header',
    children: 'This is an alert',
    button: <Button variant="sm/primary">Button</Button>,
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    header: 'Header',
    children: 'Alert',
    button: <Button variant="sm/primary">Button</Button>,
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    header: 'Header',
    children: 'Alert',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    header: 'Header',
    children: 'Alert',
  },
}
