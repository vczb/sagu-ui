import React from 'react'
import NavLink, { NavLinkProps } from '../NavLink'
import { SpacingKeys } from '../../utils/spacingModifier'
import * as S from './styles'

type BreadcrumbItem = {
  name: string
  link: string
}

export type BreadcrumbProps = {
  separator?: string
  items: BreadcrumbItem[]
  padding?: SpacingKeys
  size?: NavLinkProps['size']
}

const Breadcrumb = ({
  separator = '/',
  items,
  padding = 'mini',
  size = 'small'
}: BreadcrumbProps) => {
  if (!items) return null

  return (
    <S.Breadcrumb>
      {items.map((item, index) => (
        <>
          {index > 0 && (
            <S.BreadcrumbItem
              key={`breadcrumb-${separator}-${index}`}
              size={size}
            >
              {separator}
            </S.BreadcrumbItem>
          )}
          <S.BreadcrumbItem
            key={`breadcrumb-${item.name}-${index}`}
            size={size}
          >
            <NavLink
              active={index === items.length - 1}
              disabled={index === items.length - 1}
              title={item.name}
              size={size}
              href={index !== items.length - 1 ? item.link : undefined}
              padding={padding}
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
