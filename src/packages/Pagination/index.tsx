import React from 'react'
import { usePagination } from '../../hooks/pagination'
import * as S from './styles'
import Button from '../Button'

export type Colors = {
  page?: string
  hover?: string
}

export type PaginationProps = {
  className?: string
  colors?: Colors
  totalCount: number
  currentPage: number
  pageSize: number
  onPageChange: (page: number) => void
  siblingCount?: number
}

const Pagination = ({
  className,
  colors,
  totalCount,
  currentPage,
  pageSize,
  onPageChange,
  siblingCount = 1
}: PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  })

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null
  }

  const onNext = () => {
    if (currentPage < Math.ceil(totalCount / pageSize)) {
      onPageChange(currentPage + 1)
    }
  }

  const onPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const lastPage =
    paginationRange && paginationRange[paginationRange.length - 1]
  return (
    <S.Container className={className}>
      <S.Item disabled={currentPage === 1} onClick={onPrevious} outline={false}>
        <S.Arrow direction="left" disabled={currentPage === 1} />
      </S.Item>
      {paginationRange?.map((pageNumber: number, index: number) => {
        if (pageNumber === 0) {
          return (
            <S.Dots key={index} outline={false}>
              &#8230;
            </S.Dots>
          )
        }

        return (
          <S.Item
            key={index}
            onClick={() => onPageChange(pageNumber)}
            outline={pageNumber === currentPage}
            variant={pageNumber === currentPage ? 'secondary' : 'primary'}
          >
            {pageNumber}
          </S.Item>
        )
      })}
      <S.Item
        disabled={currentPage === lastPage}
        onClick={onNext}
        outline={false}
      >
        <S.Arrow direction="right" disabled={currentPage === lastPage} />
      </S.Item>
    </S.Container>
  )
}

export default Pagination
