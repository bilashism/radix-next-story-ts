import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import Splash from './Splash'

const meta = {
  title: 'Interface/Splash',
  component: Splash,
} satisfies Meta<typeof Splash>

export default meta
type Story = StoryObj<typeof Splash>

export const Main: Story = {
  args: {
    title: 'Hello world',
    children: 'This is a splash component',
    image: <img src="https://via.placeholder.com/150" alt="placeholder" className="h-24 w-24" />,
  },
}
