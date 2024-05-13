import { type Meta, type StoryObj } from '@storybook/react'
import { Squirrel } from 'lucide-react'
import React from 'react'
import Tile from './Tile'
import TileParent from './TileParent'

const meta: Meta<typeof Tile> = {
  title: 'Interface/Tile',
  component: Tile,
}

type Story = StoryObj<typeof Tile>

export default meta

export const TileWithParent: Story = {
  render: () => <TileParent />,
}

export const TileWithTitle: Story = {
  args: {
    title: 'text',
    radio: true,
  },
}

export const TileWithTitleAndDescription: Story = {
  args: {
    title: 'text',
    children: 'This is a description.',
    radio: true,
  },
}

export const TileWithTitleAndImage: Story = {
  args: {
    title: 'A Squirrel',
    radio: true,
    image: <Squirrel size={250} />,
  },
}

export const DisabledTileWithTitleDescriptionAndImage: Story = {
  args: {
    title: 'A Squirrel',
    radio: true,
    children: 'This is a description about a squirrel.',
    disabled: true,
    image: <Squirrel size={250} />,
  },
}
