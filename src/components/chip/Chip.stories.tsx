import { type Meta, type StoryObj } from '@storybook/react'
import { AlertCircle, AlertOctagon, BadgeInfo, CheckCheck } from 'lucide-react'
import React from 'react'
import Chip from './Chip'

const meta: Meta<typeof Chip> = {
  title: 'Interface/Chip',
  component: Chip,
}

type Story = StoryObj<typeof Chip>

export default meta

export const primary: Story = {
  args: {
    variant: 'primary',
    children: 'Chip One',
  },
}

export const primaryStartIcon: Story = {
  args: {
    variant: 'primary',
    children: 'Chip Two',
    startIcon: <CheckCheck className="mr-2 h-8 w-8 !stroke-white" />,
  },
}

export const disabledPrimaryStartIcon: Story = {
  args: {
    variant: 'primary',
    children: 'Chip Three',
    startIcon: <BadgeInfo className="mr-2 h-8 w-8 !stroke-white" />,
    disabled: true,
  },
}

export const secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Chip Four',
  },
}

export const secondaryEndIcon: Story = {
  args: {
    variant: 'secondary',
    children: 'Chip Five',
    endIcon: <AlertCircle className="!stroke-#D8D8D8 ml-2 h-8 w-8" />,
  },
}

export const disabledSecondaryEndIcon: Story = {
  args: {
    variant: 'secondary',
    children: 'Chip Six',
    endIcon: <AlertOctagon className="!stroke-#D8D8D8 ml-2 h-8 w-8" />,
    disabled: true,
  },
}
