'use client'

import { Locale } from '@workspace/types'
import { ReactNode, useEffect } from 'react'

import { initializeLocale } from '~/app/stores'

export const LocaleProvider = ({
  children,
  initialLocale
}: {
  children: ReactNode
  initialLocale: Locale
}) => {
  useEffect(() => {
    initializeLocale(initialLocale)
  }, [initialLocale])

  return <>{children}</>
}
