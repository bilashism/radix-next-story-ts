import type { Meta, StoryObj } from '@storybook/react'
import { Search } from 'lucide-react'
import React from 'react'
import Combobox from './combobox'

const meta = {
  title: 'Interface/Combobox',
  component: Combobox,
} satisfies Meta<typeof Combobox>

export default meta
type Story = StoryObj<typeof Combobox>

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label:
      'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLorem',
  },
]

export const Main: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState<string | undefined>()

    return (
      <Combobox open={open} onOpenChange={setOpen} onValueChange={setValue} value={value}>
        <Combobox.Trigger numberOfSelectedOptions={2} startIcon={<Search className="size-4" />}>
          {value ? value : 'Select framework...'}
        </Combobox.Trigger>
        <Combobox.List placeholder="Select a framework" emptyMessage="No results found" className="max-w-96">
          {frameworks.map(({ value, label }) => (
            <Combobox.Item label={label} value={value} />
          ))}
        </Combobox.List>
      </Combobox>
    )
  },
}
