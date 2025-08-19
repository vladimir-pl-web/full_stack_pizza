import { Ref } from 'react'

export enum IDropdownMenuTrigger {
  THEME = 'theme',
  LANGUAGE = 'language'
}
export type Drop = IDropdownMenuTrigger | null

export interface IMenuTrigger {
  triggerRef: Ref<HTMLElement | null>
  open: boolean
  onOpenChange: (open: boolean) => void
}
