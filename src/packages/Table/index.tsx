import React, { ReactNode } from 'react'
import * as S from './style'

export interface TableColumn {
  title: string
  key: string
}

export interface TableRow {
  [key: string]: ReactNode
}

export interface TableProps {
  columns: TableColumn[]
  data: TableRow[]
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <S.Table>
      <S.TableHead>
        {columns.map((column) => (
          <S.TableHeaderCell key={column.key}>{column.title}</S.TableHeaderCell>
        ))}
      </S.TableHead>
      <S.TableBody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <S.TableCell key={column.key}>{row[column.key]}</S.TableCell>
            ))}
          </tr>
        ))}
      </S.TableBody>
    </S.Table>
  )
}

export default Table
