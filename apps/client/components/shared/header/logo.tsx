'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { Locale } from '~/lib/i18n/config'
import { cn } from '~/lib/utils'

interface ILogo {
  className?: string
  locale: Locale
}

export const Logo: React.FC<ILogo> = ({ className, locale }) => {
  const { t } = useTranslation('common')
  const router = useRouter()

  return (
    <div className={cn('flex items-center gap-4', className)}>
      <Image
        onClick={() => router.push(`/${locale}`)}
        className="cursor-pointer"
        src="/logo.png"
        width={35}
        height={35}
        alt="Logo"
      />
      <div>
        <h1 className="text-2xl font-black uppercase">Next Pizza</h1>
        <p className="text-sm leading-3 text-gray-400">{t('logo.greeting')}</p>
      </div>
    </div>
  )
}
