import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import Typography from '../typography/Typography'
import ProgressBar from './ProgressBar'
import { PROGRESSBAR_TEXT_STYLES } from './styles'

const meta = {
  title: 'Interface/ProgressBar',
  component: ProgressBar,
  argTypes: {
    value: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
} satisfies Meta<typeof ProgressBar>

export default meta
type Story = StoryObj<typeof ProgressBar>

export const Main: Story = {
  args: {
    value: 50,
    label: 'Progress bar',
  },
}

export const WithIndicator: Story = {
  args: {
    value: 50,
    label: 'Progress bar',
    indicator: true,
  },
}

export const WithDescription: Story = {
  args: {
    value: 50,
    label: 'Progress bar',
    indicator: true,
    description: 'This is a description for the progress bar.',
  },
}

export const WithExtraInformation: Story = {
  args: {
    value: 50,
    label: 'Progress bar',
    indicator: true,
    children: (
      <Typography variant="sm/regular" className="!text-primary-500">
        This is some extra information about the progress bar.
      </Typography>
    ),
  },
}

export const Inverted: Story = {
  args: {
    value: 50,
    label: 'Progress bar',
    indicator: true,
    variant: 'inverted',
    description: 'This is a description for the progress bar.',
    children: (
      <Typography variant="sm/regular" className={PROGRESSBAR_TEXT_STYLES['inverted']}>
        This is some extra information about the progress bar.
      </Typography>
    ),
  },
  parameters: {
    backgrounds: { default: 'inverted' },
  },
}
