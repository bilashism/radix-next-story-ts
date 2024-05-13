import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import Button from '../button/Button'
import Grid from './Grid'

const meta: Meta<typeof Grid> = {
  title: 'Interface/Grid',
  component: Grid,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Grid>

export const RegularGrid: Story = {
  args: {
    children: Array.from(Array(12)).map((_, index) => <Button key={index}>{index + 1}</Button>),
  },
}
