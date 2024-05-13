import type { Meta, StoryObj } from '@storybook/react'
import Breadcrumbs from './Breadcrumbs'

const meta = {
  title: 'Interface/Breadcrumbs',
  component: Breadcrumbs,
} satisfies Meta<typeof Breadcrumbs>

export default meta
type Story = StoryObj<typeof Breadcrumbs>

const links = [
  { href: '/profile', label: 'Profile' },
  { href: '/profile/me', label: 'Me' },
  { href: '/profile/me/settings', label: 'Settings' },
]

export const Main: Story = {
  args: {
    links,
    home: '/',
  },
  parameters: {
    backgrounds: { default: 'inverted' },
  },
}
