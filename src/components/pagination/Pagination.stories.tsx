import type { Meta, StoryObj } from '@storybook/react'
import Pagination from './Pagination'

const meta = {
  title: 'Interface/Pagination',
  component: Pagination,
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof Pagination>

export const Main: Story = {
  args: {
    currentPage: 1,
    itemsPerPage: 10,
    totalPages: 1,
    onPrevPage: () => {},
    onNextPage: () => {},
    onSelectPage: () => {},
    onSelectItemsPerPage: () => {},
  },
}
