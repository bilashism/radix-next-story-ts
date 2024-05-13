import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import Sidebar from './Sidebar'

const meta = {
  title: 'Interface/Sidebar',
  component: Sidebar,
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof Sidebar>

export const Main: Story = {
  render: () => {
    return (
      <Sidebar>
        <Sidebar.Trigger>Open sidebar</Sidebar.Trigger>
        <Sidebar.Content>
          <Sidebar.Title>text</Sidebar.Title>
          <div>This is the panel title</div>
          <div>This is the panel description. This may contain text or any other content.</div>
          <div>This is the footer</div>
        </Sidebar.Content>
      </Sidebar>
    )
  },
}
