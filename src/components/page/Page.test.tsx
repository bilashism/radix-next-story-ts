import { render } from '@testing-library/react'
import React from 'react'
import Page from './Page'

describe('Page', () => {
  it(`renders component`, () => {
    const { getByText } = render(<Page>This is a page component</Page>)
    expect(getByText('This is a page component')).toHaveTextContent('This is a page component')
  })
})
