import type { Meta, StoryObj } from '@storybook/react'
import { Search } from 'lucide-react'
import React from 'react'
import TextSearchField from './TextSearchField'

const meta: Meta<typeof TextSearchField> = {
  title: 'Interface/TextSearchField',
  component: TextSearchField,
} satisfies Meta<typeof TextSearchField>

export default meta
type Story = StoryObj<typeof TextSearchField>

export const Main: Story = {
  render: () => {
    return (
      <TextSearchField>
        <TextSearchField.Input startIcon={Search} placeholder="Placeholder..." />
        <TextSearchField.List>
          <TextSearchField.ListEmpty>
            <span>Geen resultaten gevonden.</span>
          </TextSearchField.ListEmpty>
          <TextSearchField.ListItem value="Item 1">
            <span>Item 1</span>
          </TextSearchField.ListItem>
          <TextSearchField.ListItem value="Item 2">
            <span>Item 2</span>
          </TextSearchField.ListItem>
          <TextSearchField.ListItem value="Item 3">
            <span>Item 3</span>
          </TextSearchField.ListItem>
          <TextSearchField.ListItem value="Item 4">
            <span>Item 4</span>
          </TextSearchField.ListItem>
          <TextSearchField.ListItem value="Item 5">
            <span>Item 5</span>
          </TextSearchField.ListItem>
        </TextSearchField.List>
      </TextSearchField>
    )
  },
}
