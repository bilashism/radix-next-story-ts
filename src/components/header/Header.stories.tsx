import { type Meta, type StoryObj } from '@storybook/react'
import React from 'react'
import { ProgressBar } from '../progressbar'
import Header from './Header'

const meta: Meta<typeof Header> = {
  title: 'Interface/Header',
  component: Header,
}

type Story = StoryObj<typeof Header>

export default meta

export const PageHeader: Story = {
  args: {
    variant: 'pageHeader',
    title: 'Title Page Header',
    description: 'This is a description for page header',
    href: '#page-header',
    info: 'Information about the header or page should be placed in here',
    children: 'My children',
  },
}

export const containerHeader: Story = {
  args: {
    variant: 'containerHeader',
    title: 'Title Container Header',
    description: 'This is a description for container header',
    info: 'information should be put here',
    href: '#container-header',
    children: <ProgressBar className="self-center" label="Progress bar" value={75} />,
  },
}

export const sectionHeader: Story = {
  args: {
    variant: 'sectionHeader',
    title: 'Title Section Header',
    description: 'This is a description for section header',
    info: 'information in here',
    href: '#section-header',
    children: 'My children',
  },
}
export const ContainerHeaderWithLessProps: Story = {
  args: {
    variant: 'containerHeader',
    title: 'Title Container Header',
    href: '#container',
  },
}
