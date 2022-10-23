import React from 'react'
import NavLink, { NavLinkProps } from '../NavLink'
import * as S from './styles'

type BreadcrumbItem = {
  name: string
  link: string
}

export type BreadcrumbProps = {
  separator?: string
  items: BreadcrumbItem[]
  size?: NavLinkProps['size']
}

const Breadcrumb = ({
  separator = '/',
  items,
  size = 'small'
}: BreadcrumbProps) => {
  if (!items) return null

  return (
    <S.Breadcrumb>
      {items.map((item, index) => (
        <>
          {index > 0 && (
            <S.BreadcrumbItem key={`breadcrumb-${separator}-${index}`}>
              {separator}
            </S.BreadcrumbItem>
          )}
          <S.BreadcrumbItem key={`breadcrumb-${item.name}-${index}`}>
            <NavLink
              active={index === items.length - 1}
              title={item.name}
              size={size}
              href={item.link}
            >
              {item.name}
            </NavLink>
          </S.BreadcrumbItem>
        </>
      ))}
    </S.Breadcrumb>
  )
}

export default Breadcrumb
