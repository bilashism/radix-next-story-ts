import { render, screen } from '@testing-library/react'
import React from 'react'
import { Typography } from '../typography'
import List from './List'

describe('Component - List', () => {
  beforeEach(() => {
    render(
      <List data-testid="list" className="p-10">
        <List.Item>
          <Typography className="p-2">This is a list item.</Typography>
        </List.Item>
        <List.Item>
          <Typography className="p-2">This is also a list item.</Typography>
        </List.Item>
      </List>,
    )
  })

  it('renders the list with ListItems', () => {
    expect(screen.getByTestId('list')).toBeInTheDocument()
    expect(screen.getByText('This is a list item.')).toBeInTheDocument()
  })

  it('renders the list with additional classnames', () => {
    expect(screen.getByTestId('list')).toHaveClass('p-10')
  })
})
