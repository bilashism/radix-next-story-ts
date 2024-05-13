import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import Button from '../button/Button'
import Heading from '../heading/Heading'
import Typography from '../typography/Typography'
import Card from './Card'

const meta: Meta<typeof Card> = {
  title: 'Interface/Card',
  component: Card,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Card>

export const CardWithContent: Story = {
  args: {
    children: [
      <>
        <Heading variant="h3" className="mb-1">
          Card title
        </Heading>
        <Typography>
          The content of the card can be anything, and is provided through the children. An example would be a button:
        </Typography>
        <Button variant="md/secondary" className="mt-3" key={1}>
          Secondary button
        </Button>
      </>,
    ],
  },
}
