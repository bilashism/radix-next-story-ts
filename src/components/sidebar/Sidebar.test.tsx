import { render, screen } from '@testing-library/react'
import React from 'react'
import Sidebar from './Sidebar'

describe('Sidebar', () => {
  it('renders the logo when provided', () => {
    render(
      <Sidebar>
        <Sidebar.Trigger>Open sidebar</Sidebar.Trigger>
        <Sidebar.Content>
          <Sidebar.Title>text</Sidebar.Title>
          <div>This is the panel title</div>
          <div>This is the panel description. This may contain text or any other content.</div>
          <div>This is the footer</div>
        </Sidebar.Content>
      </Sidebar>,
    )
    expect(screen.getByText('text')).toBeInTheDocument()
  })

  it('renders the children', () => {
    render(
      <Sidebar>
        <Sidebar.Trigger>Open sidebar</Sidebar.Trigger>
        <Sidebar.Content>
          <Sidebar.Title>text</Sidebar.Title>
          <div data-testid="children">Panel children</div>
        </Sidebar.Content>
      </Sidebar>,
    )
    expect(screen.getByTestId('children')).toBeInTheDocument()
  })
})
