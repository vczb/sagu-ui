// import React, { useState } from 'react'
// import { Story, Meta } from '@storybook/react/types-6-0'
// import Pagination, { PaginationProps } from '.'

// export default {
//   title: 'Pagination',
//   component: Pagination,
//   args: {
//     totalCount: 1000,
//     pageSize: 5
//   }
// } as Meta

// export const Default: Story<PaginationProps> = (args) => {
//   const [currentPage, setCurrentPage] = useState(100)
//   return (
//     <>
//       Default Pagination
//       <Pagination
//         {...args}
//         currentPage={currentPage}
//         onPageChange={(page) => setCurrentPage(page)}
//       />
//       Default Pagination with sibling = 1
//       <Pagination
//         {...args}
//         currentPage={currentPage}
//         onPageChange={(page) => setCurrentPage(page)}
//         siblingCount={1}
//       />
//       Default Pagination with sibling = 2
//       <Pagination
//         {...args}
//         currentPage={currentPage}
//         onPageChange={(page) => setCurrentPage(page)}
//         siblingCount={2}
//       />
//     </>
//   )
// }

// export const ColorfulPagination: Story<PaginationProps> = (args) => {
//   const [currentPage, setCurrentPage] = useState(100)
//   return (
//     <>
//       Default Pagination
//       <Pagination
//         {...args}
//         currentPage={currentPage}
//         onPageChange={(page) => setCurrentPage(page)}
//         colors={{ page: 'purple', hover: 'pink' }}
//       />
//       Default Pagination with sibling = 1
//       <Pagination
//         {...args}
//         currentPage={currentPage}
//         onPageChange={(page) => setCurrentPage(page)}
//         siblingCount={1}
//         colors={{ page: 'yellow', hover: 'pink' }}
//       />
//       Default Pagination with sibling = 2
//       <Pagination
//         {...args}
//         currentPage={currentPage}
//         onPageChange={(page) => setCurrentPage(page)}
//         siblingCount={2}
//         colors={{ page: 'green', hover: 'pink' }}
//       />
//     </>
//   )
// }
