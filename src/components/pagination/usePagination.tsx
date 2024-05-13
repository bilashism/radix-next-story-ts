'use client'

import { useCallback, useState } from 'react'

export const usePagination = (totalItems: number) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)

  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const handlePrevPage = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1)
    }
  }, [currentPage])

  const handleNextPage = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1)
    }
  }, [currentPage])

  const handlePageChange = useCallback((value: string) => {
    setCurrentPage(parseInt(value))
  }, [])

  const handleItemsPerPageChange = useCallback((value: string) => {
    const selectedItemsPerPage = parseInt(value)
    setItemsPerPage(selectedItemsPerPage)
  }, [])

  return {
    currentPage,
    itemsPerPage,
    totalPages,
    handlePrevPage,
    handleNextPage,
    handlePageChange,
    handleItemsPerPageChange,
  }
}
