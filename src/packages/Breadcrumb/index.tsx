import React from 'react'
import * as S from './styles'

export type BreadcrumbProps = {
  separator?: string
  children: React.ReactNode
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  separator = '/',
  children
}) => {
  // Wrap all items in li tag
  const allItems = React.Children.toArray(children)
    .filter((child) => React.isValidElement(child))
    .map((child, index) => <li key={`breadcrumb-item-${index}`}>{child}</li>)

  return (
    <S.Breadcrumb>
      {allItems.map((item, index) =>
        index !== 0
          ? [
              <S.BreadcrumbItem key={`breadcrumb-separator-${index}`}>
                {separator}
              </S.BreadcrumbItem>,
              item
            ]
          : item
      )}
    </S.Breadcrumb>
  )
}

export default Breadcrumb
