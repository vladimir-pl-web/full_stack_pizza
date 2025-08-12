'use client'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { i18nConfig } from './config'

export async function initClientI18n(locale: string) {
  if (!i18n.isInitialized) {
    await i18n.use(initReactI18next).init({
      lng: locale,
      fallbackLng: i18nConfig.defaultLocale,
      ns: i18nConfig.ns,
      defaultNS: 'common',
      resources: {}
    })
  }
}
