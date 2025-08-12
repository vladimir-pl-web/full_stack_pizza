import { Resource } from 'i18next'

import enCommon from '~/lib/i18n/locales/en/common.json'
import lvCommon from '~/lib/i18n/locales/lv/common.json'
import nlCommon from '~/lib/i18n/locales/nl/common.json'
import ruCommon from '~/lib/i18n/locales/ru/common.json'

import { i18nConfig, Locale } from './config'

export const resources = {
  en: { common: enCommon },
  ru: { common: ruCommon },
  lv: { common: lvCommon },
  nl: { common: nlCommon }
} as const

export type I18nResources = typeof resources

export function isLocale(value: string): value is Locale {
  return (i18nConfig.locales as readonly string[]).includes(value)
}

export function getDefaultLocale(): Locale {
  return i18nConfig.defaultLocale
}

export function getResources(): Resource {
  return resources as unknown as Resource
}
