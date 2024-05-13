import { render, screen } from '@testing-library/react'
import React from 'react'
import Pagination from './Pagination'

describe('Component - Pagination', () => {
  const defaultProps = {
    currentPage: 1,
    itemsPerPage: 10,
    totalPages: 1,
    onPrevPage: jest.fn(),
    onNextPage: jest.fn(),
    onSelectPage: jest.fn(),
    onSelectItemsPerPage: jest.fn(),
  }

  it('renders the component', () => {
    render(<Pagination {...defaultProps} data-testid="pagination" />)
    expect(screen.getByTestId('pagination')).toBeInTheDocument()
  })

  // TODO: Add event handler tests
})
