import { Pagination } from '../pagination'
import { ListRoot, type ListComponent } from './List'
import ListItem from './ListItem'

const PaginatedList: ListComponent & {
  Item: typeof ListItem
  Pagination: typeof Pagination
} = Object.assign(ListRoot, {
  Item: ListItem,
  Pagination: Pagination,
})

export default PaginatedList
