import { render, screen } from '@testing-library/react'
import React from 'react'
import Login from './Login'

describe('Login', () => {
  it(`renders component`, () => {
    render(<Login>This is a Login page component</Login>)
    expect(screen.getByText('This is a Login page component')).toHaveTextContent('This is a Login page component')
  })
})
