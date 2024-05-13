import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Typography } from '../../typography'
import Login, { LoginProps } from './Login'

const meta: Meta<LoginProps> = {
  title: 'Interface/Login',
  component: Login,
  parameters: {
    layout: 'fullscreen',
    padded: false,
  },
}

export default meta

type Story = StoryObj<typeof Login>

export const Main: Story = {
  args: {
    children: <Typography>Text for login page</Typography>,
  },
}
