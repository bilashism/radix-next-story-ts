import '@/styles/globals.css'
import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: 'dark', value: '#222', default: true },
        { name: 'black', value: '#000000' },
        { name: 'light', value: '#ddd' },
        { name: 'white', value: '#fff' },
        { name: 'inverted', value: '#33434E' },
      ],
    },
    actions: { argTypesRegex: '^on.*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
