import Dropzone from './Dropzone'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Interface/Dropzone',
  component: Dropzone,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Dropzone>

export default meta
type Story = StoryObj<typeof Dropzone>

export const Main: Story = {
  argTypes: {
    fileAdded: {
      options: [false, true],
      control: 'boolean',
    },
    error: {
      options: [false, true],
      control: 'boolean',
    },
    success: {
      options: [false, true],
      control: 'boolean',
    },

    heading: {
      control: 'select',
      options: [
        'Selecteer een JSON-bestand',
        'Selecteer een DOC-bestand',
        'Selecteer een DOCX-bestand',
        'Selecteer een PDF-bestand',
        'Selecteer een PNG-bestand',
      ],
    },
  },
}
