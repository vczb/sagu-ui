import React, { MenuHTMLAttributes, useState, useRef } from 'react'
import NavLink from '../NavLink'
import * as S from './styles'
import Paper from '../Paper'
import { useOnClickOutside, useOnKeypress } from '../../hooks'

type ItemsProps = {
  path: string
  label: string
}

export type MenuProps = {
  title: string
  active?: boolean
  items?: ItemsProps[]
} & MenuHTMLAttributes<HTMLMenuElement>

const Menu = ({ title, active, items, ...props }: MenuProps) => {
  const [isActive, setIsActive] = useState(active)

  const ref = useRef<HTMLDivElement>(null)

  useOnClickOutside(ref, () => {
    setIsActive(false)
  })

  useOnKeypress('Escape', () => {
    setIsActive(false)
  })

  if (!items?.length) return null

  return (
    <S.Menu {...props} ref={ref}>
      <S.MenuButton active={isActive} onClick={() => setIsActive(!isActive)}>
        <NavLink size="medium" active={isActive}>
          {title}
        </NavLink>
      </S.MenuButton>
      {isActive && (
        <Paper placement="bottom" active={isActive}>
          <S.MenuList>
            {items?.map(({ path, label }) => (
              <S.MenuItem key={path}>
                <NavLink size="small" href={path}>
                  {label}
                </NavLink>
              </S.MenuItem>
            ))}
          </S.MenuList>
        </Paper>
      )}
    </S.Menu>
  )
}

export default Menu
