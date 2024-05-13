import type { Meta, StoryObj } from '@storybook/react'
import TextArea from './TextArea'

const meta: Meta<typeof TextArea> = {
  title: 'Interface/TextArea',
  component: TextArea,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof TextArea>

export default meta

type Story = StoryObj<typeof TextArea>

export const Default: Story = {
  args: {
    children: 'Formulierelement dat een invoers element voor platte tekst met regels biedt',
  },
}

export const Error: Story = {
  args: {
    placeholder: 'Placeholder',
    disabled: false,
    error: true,
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Placeholder',
    disabled: true,
  },
}
