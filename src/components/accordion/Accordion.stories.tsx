import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import Accordion from './Accordion'

const meta = {
  title: 'Interface/Accordion',
  component: Accordion,
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof Accordion>

export const OpenSingleItem: Story = {
  render: () => (
    <Accordion type="single" collapsible>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Is this accordion accessible?</Accordion.Trigger>
        <Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Frequently asked question 2</Accordion.Trigger>
        <Accordion.Content>Answer 2.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Frequently asked question 3</Accordion.Trigger>
        <Accordion.Content>Answer 3.</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
}

export const OpenMultipleItems: Story = {
  render: () => (
    <Accordion type="multiple">
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Is this accordion accessible?</Accordion.Trigger>
        <Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Frequently asked question 2</Accordion.Trigger>
        <Accordion.Content>Answer 2.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Frequently asked question 3</Accordion.Trigger>
        <Accordion.Content>Answer 3.</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
}
