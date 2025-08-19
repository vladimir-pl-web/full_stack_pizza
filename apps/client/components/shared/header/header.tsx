import { ArrowRight, ShoppingCart, UserIcon } from 'lucide-react'
import React from 'react'

import { Button } from '~/components/ui'
import { Locale } from '~/lib/i18n/config'

import { Container } from '..'
import { Logo } from './logo'
import { ThemeAndLanguage } from './themeAndLanguage'

interface IHeader {
  locale: Locale
  translate: (key: string) => string
  isAuthorised: boolean
}

export const Header: React.FC<IHeader> = ({ translate, locale, isAuthorised }) => {
  const profileBtnText = isAuthorised ? translate('profile') : translate('enter')
  return (
    <header className="border-b border-gray-100">
      <Container className="flex items-center justify-between py-8">
        <Logo locale={locale} />
        <div className="flex items-center justify-between gap-12">
          <div className="flex items-center gap-4">
            <Button variant="outline" className="flex items-center gap-1">
              <UserIcon size={16} />
              {profileBtnText}
            </Button>
            <Button className="group relative">
              <b>52 EU</b>
              <span className="mx-3 h-full w-[1px] bg-white/30" />
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart size={16} className="relative" strokeWidth={2} />
                <b>3</b>
              </div>
              <ArrowRight className="absolute right-5 w-5 -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            </Button>
          </div>
          <ThemeAndLanguage locale={locale} />
        </div>
      </Container>
    </header>
  )
}
