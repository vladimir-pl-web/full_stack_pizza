'use client'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Cookies from 'js-cookie'
import { usePathname, useRouter } from 'next/navigation'
import React, { FC, Ref } from 'react'
import ReactCountryFlag from 'react-country-flag'

import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '~/components/ui/dropdown-menu'
import { Locale } from '~/lib/i18n/config'
import { cn } from '~/lib/utils'

import { IMenuTrigger } from './types'

const languages = [
  { code: 'en', name: 'English', countryCode: 'GB' },
  { code: 'ru', name: 'Русский', countryCode: 'RU' },
  { code: 'lv', name: 'Latviešu', countryCode: 'LV' },
  { code: 'nl', name: 'Nederlands', countryCode: 'NL' }
]
interface ILangSwitcher extends IMenuTrigger {
  locale: Locale
}
export const LanguageSwitcher: FC<ILangSwitcher> = ({ triggerRef, locale, open, onOpenChange }) => {
  const router = useRouter()
  const pathname = usePathname()

  function changeLanguage(newLang: string) {
    Cookies.set('NEXT_LOCALE', newLang, { expires: 365 })

    const segments = pathname?.split('/') || []
    segments[1] = newLang
    const newPath = segments.join('/') || `/${newLang}`

    router.push(newPath)
  }
  return (
    <DropdownMenu.Root open={open} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger
        className="border-primary hover:delay-bg-100 cursor-pointer rounded-lg border p-1 hover:bg-gray-100 dark:hover:bg-gray-700"
        ref={triggerRef as Ref<HTMLButtonElement | null>}
      >
        {languages
          .filter((l) => l.code === locale)
          .map(({ countryCode, name }) => (
            <ReactCountryFlag
              key={name}
              svg
              countryCode={countryCode}
              className="rounded-lg p-1 text-3xl"
            />
          ))}
      </DropdownMenuTrigger>
      <DropdownMenuContent onCloseAutoFocus={(e) => e.preventDefault()} align="end">
        {languages.map(({ code, countryCode, name }) => (
          <DropdownMenuItem
            key={countryCode}
            onClick={() => changeLanguage(code)}
            className={cn(
              'flex cursor-pointer items-center gap-2 rounded-2xl bg-transparent p-2 text-gray-700 hover:bg-gray-100 hover:transition-colors hover:delay-75 dark:text-gray-300 dark:hover:bg-gray-700',
              {
                'border-blue-500': code === locale
              }
            )}
          >
            <ReactCountryFlag
              countryCode={countryCode}
              svg
              className="h-1 w-1"
              aria-hidden="true"
            />
            <span className="text-sm">{name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu.Root>
  )
}
export default LanguageSwitcher
