import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { usePagination } from '../pagination/usePagination'
import { Typography } from '../typography'
import List from './List'
import PaginatedList from './PaginatedList'

const meta = {
  title: 'Interface/List',
  component: List,
} satisfies Meta<typeof List>

export default meta

type Story = StoryObj<typeof List>

export const Main: Story = {
  args: {
    children: [
      <>
        {[...Array(10)].map((_, i) => (
          <List.Item key={i}>
            <Typography className="p-2">This is a list item.</Typography>
          </List.Item>
        ))}
      </>,
    ],
  },
}

export const ListWithPagination: Story = {
  render: () => {
    const items = Array.from(Array(35).keys())
    const {
      currentPage,
      itemsPerPage,
      totalPages,
      handlePrevPage,
      handleNextPage,
      handlePageChange,
      handleItemsPerPageChange,
    } = usePagination(items.length)

    // Calculate start and end index of shown items
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage

    // Slice items in array based on start and end index to get displayed items
    const displayedItems = items.slice(startIndex, endIndex)

    return (
      <>
        <PaginatedList>
          {displayedItems.map((index) => (
            <PaginatedList.Item key={index}>
              <Typography variant="lg/regular" className="p-2">
                {index + 1}
              </Typography>
            </PaginatedList.Item>
          ))}
        </PaginatedList>
        <PaginatedList.Pagination
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          totalPages={totalPages}
          onPrevPage={handlePrevPage}
          onNextPage={handleNextPage}
          onSelectItemsPerPage={handleItemsPerPageChange}
          onSelectPage={handlePageChange}
        />
      </>
    )
  },
}
