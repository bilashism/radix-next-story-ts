import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import Header from '../header/Header'
import { Typography } from '../typography'
import Page, { PageProps } from './Page'

const meta: Meta<PageProps> = {
  title: 'Interface/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
    padded: false,
  },
}

export default meta

type Story = StoryObj<typeof Page>

export const Main: Story = {
  args: {
    header: (
      <Header
        variant="pageHeader"
        description="This is a description"
        href="#page"
        info="info here"
        title="Title Page Header"
      />
    ),
    children: <Typography>Text for page</Typography>,
  },
}
