'use client'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import * as React from 'react'
import { FC, Ref } from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from '~/components/ui'
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '~/components/ui/dropdown-menu'

import { IMenuTrigger } from './types'

type IColorThemeSwitcher = IMenuTrigger

export const ColorThemeSwitcher: FC<IColorThemeSwitcher> = ({ triggerRef, open, onOpenChange }) => {
  const { setTheme } = useTheme()
  const { t } = useTranslation('common')

  const themes = [
    { value: 'light', label: t('theme.light') },
    { value: 'dark', label: t('theme.dark') },
    { value: 'system', label: t('theme.system') }
  ]

  return (
    <DropdownMenu.Root open={open} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" ref={triggerRef as Ref<HTMLButtonElement | null>}>
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent onCloseAutoFocus={(e) => e.preventDefault()} align="end">
        {themes.map(({ value, label }) => (
          <DropdownMenuItem key={value} onClick={() => setTheme(value)}>
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu.Root>
  )
}
