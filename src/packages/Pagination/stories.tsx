import React, { useState, useEffect } from 'react'
import Pagination, { PaginationProps } from '.'

export default {
  title: 'Pagination',
  component: Pagination,
  args: {
    totalCount: 100,
    currentPage: 1,
    pageSize: 10,
    siblingCount: 1
  }
}

const Template = (args: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage)

  useEffect(() => {
    setCurrentPage(args.currentPage)
  }, [args.currentPage])

  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onPageChange={(page: number) => {
        setCurrentPage(page)
      }}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  totalCount: 100,
  currentPage: 1,
  pageSize: 10,
  siblingCount: 1
}
