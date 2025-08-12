'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'

export default function MyClient() {
  const { t } = useTranslation('common')

  return <p>{t('language')}</p>
}
