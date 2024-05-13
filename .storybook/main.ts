import type { StorybookConfig } from '@storybook/nextjs'
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      fastRefresh: true,
    },
  },
  docs: {
    autodocs: true,
  },
  core: {
    disableTelemetry: true,
  },
  staticDirs: ['../public'], // Configures the static asset folder in Storybook
}
export default config
