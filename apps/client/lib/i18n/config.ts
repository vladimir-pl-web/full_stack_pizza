export const i18nConfig = {
  defaultLocale: 'en',
  locales: ['en', 'ru', 'lv', 'nl'],
  ns: ['common']
} as const

export type Locale = (typeof i18nConfig.locales)[number]
export type Namespace = (typeof i18nConfig.ns)[number]
