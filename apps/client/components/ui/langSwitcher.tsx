'use client'

import Cookies from 'js-cookie'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import ReactCountryFlag from 'react-country-flag'

const LANGUAGES = [
  { code: 'en', name: 'English', countryCode: 'GB' },
  { code: 'ru', name: 'Русский', countryCode: 'RU' },
  { code: 'lv', name: 'Latviešu', countryCode: 'LV' },
  { code: 'nl', name: 'Nederlands', countryCode: 'NL' }
]

export default function LanguageSwitcher({ locale }: { locale: string }) {
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
    <div className="flex gap-12">
      {LANGUAGES.map(({ code, countryCode, name }) => (
        <button
          key={code}
          onClick={() => changeLanguage(code)}
          style={{
            border: code === locale ? '2px solid blue' : '1px solid gray',
            background: 'transparent',
            cursor: 'pointer',
            padding: 4,
            borderRadius: 6
          }}
          aria-label={name}
          title={name}
        >
          <ReactCountryFlag
            countryCode={countryCode}
            svg
            style={{ width: '1.8em', height: '1.8em' }}
            aria-hidden="true"
          />
        </button>
      ))}
    </div>
  )
}
