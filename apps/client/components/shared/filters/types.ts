import { ReactNode } from 'react'

export interface IFilterCheckbox {
  label: string
  value: string
  endAdornment?: ReactNode
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}
