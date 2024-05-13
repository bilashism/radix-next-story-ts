'use client'

import { classNames } from '@/styles/styling'
import { Play } from 'lucide-react'
import React, { forwardRef } from 'react'
import { Button } from '../button'
import { Select } from '../select'
import { Typography } from '../typography'

export interface PaginationProps extends React.ComponentPropsWithoutRef<'div'> {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  onPrevPage: React.MouseEventHandler<HTMLButtonElement>
  onNextPage: React.MouseEventHandler<HTMLButtonElement>
  onSelectPage: (value: string) => void
  onSelectItemsPerPage: (value: string) => void
}

const Pagination: React.FC<PaginationProps> = forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      className,
      currentPage,
      itemsPerPage,
      totalPages,
      onPrevPage,
      onNextPage,
      onSelectPage,
      onSelectItemsPerPage,
      ...rest
    },
    ref,
  ) => {
    return (
      <div ref={ref} className={classNames('flex items-center justify-between px-2 pt-2', className)} {...rest}>
        <div className="inline-flex">
          <Typography>
            Aantal per pagina:
            <Select
              value={itemsPerPage?.toString()}
              onValueChange={onSelectItemsPerPage}
              defaultValue={itemsPerPage?.toString()}
            >
              <Select.Trigger
                className="inline-flex border-none hover:!border-none hover:!ring-0 active:!ring-0"
                data-testid="select-items-page-button"
              >
                {itemsPerPage}
              </Select.Trigger>
              <Select.Content>
                <Select.Group>
                  <Select.Item value="5">5</Select.Item>
                  <Select.Item value="10">10</Select.Item>
                  <Select.Item value="15">15</Select.Item>
                </Select.Group>
              </Select.Content>
            </Select>
          </Typography>
        </div>
        <div className="inline-flex">
          <div className="mr-8">
            <Typography>
              <Select value={currentPage?.toString()} onValueChange={onSelectPage}>
                <Select.Trigger
                  className="inline-flex border-none hover:!border-none hover:!ring-0 active:!ring-0"
                  data-testid="select-page-button"
                >
                  {currentPage}
                </Select.Trigger>
                <Select.Content>
                  <Select.Group>
                    {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                      <Select.Item key={page} value={page.toString()}>
                        {page}
                      </Select.Item>
                    ))}
                  </Select.Group>
                </Select.Content>
              </Select>{' '}
              van {totalPages}
            </Typography>
          </div>
          <Button
            disabled={currentPage === 1}
            variant="sm/inline"
            className="mr-3 "
            onClick={onPrevPage}
            data-testid="previous-page-button"
          >
            <Play
              className={classNames(
                currentPage === totalPages
                  ? '!fill-primary-300 !stroke-primary-300'
                  : '!fill-primary-600 !stroke-primary-600',
                'rotate-180 !h-5 !w-5 p-1 hover:!stroke-accent-orange-600 hover:!fill-accent-orange-600 focus-visible:!fill-accent-orange-800 focus-visible:ring-2 focus-visible:ring-accent-orange-800 focus-visible:ring-offset-2 active:!fill-accent-orange-800',
              )}
            />
          </Button>
          <Button
            disabled={currentPage === totalPages}
            variant="sm/inline"
            onClick={onNextPage}
            data-testid="previous-next-button"
          >
            <Play
              className={classNames(
                currentPage === totalPages
                  ? '!fill-primary-300 !stroke-primary-300'
                  : '!fill-primary-600 !stroke-primary-600',
                '!h-5 !w-5 p-1 hover:!stroke-accent-orange-600 hover:!fill-accent-orange-600 focus-visible:!fill-accent-orange-800 focus-visible:ring-2 focus-visible:ring-accent-orange-800 focus-visible:ring-offset-2 active:!fill-accent-orange-800',
              )}
            />
          </Button>
        </div>
      </div>
    )
  },
)
export default Pagination
