// Extend Jest "expect" functionality with Testing Library assertions.
import '@testing-library/jest-dom'

// This is needed for Jest and React Testing Library to be able to render some components
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
global.ResizeObserver = require('resize-observer-polyfill')
