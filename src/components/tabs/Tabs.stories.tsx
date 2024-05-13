import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import Card from '../card/Card'
import Tabs from './Tabs'

const meta = {
  title: 'Interface/Tabs',
  component: Tabs,
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: () => (
    <Tabs>
      <Tabs.List>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">
        <div>This is my account</div>
      </Tabs.Content>
      <Tabs.Content value="profile">
        <div>This is my profile</div>
      </Tabs.Content>
    </Tabs>
  ),
}

export const Contained: Story = {
  render: () => (
    <Card className="!p-0 !pb-10">
      <Tabs>
        <Tabs.List>
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="account" contained>
          <div>This is my account</div>
        </Tabs.Content>
        <Tabs.Content value="profile" contained>
          <div>This is my profile</div>
        </Tabs.Content>
      </Tabs>
    </Card>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Card className="!p-0 !pb-10">
      <Tabs>
        <Tabs.List>
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger value="profile" disabled>
            Profile
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="account" contained>
          <div>This is my account</div>
        </Tabs.Content>
        <Tabs.Content value="profile" contained>
          <div>This is my profile</div>
        </Tabs.Content>
      </Tabs>
    </Card>
  ),
}
