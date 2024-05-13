const config = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['**/*.tsx', '!<rootDir>/src/**/*.stories.{js,jsx,ts,tsx}'],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '.+\\.(css|styl|less|sass|scss)$': '<rootDir>/node_modules/jest-css-modules-transform',
  },
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  testEnvironment: 'jsdom',
  verbose: true,
}

export default config
