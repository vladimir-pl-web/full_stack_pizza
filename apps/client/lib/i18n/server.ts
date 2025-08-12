import i18next, { i18n as I18nInstance } from 'i18next'
import Backend from 'i18next-fs-backend'
import path from 'path'

import { i18nConfig, Locale } from './config'

export async function getServerTranslation(locale: string, ns = 'common') {
  if (!i18nConfig.locales.includes(locale as Locale)) {
    locale = i18nConfig.defaultLocale
  }

  const i18nInstance: I18nInstance = i18next.createInstance()

  await i18nInstance.use(Backend).init({
    lng: locale,
    ns: [ns],
    fallbackLng: i18nConfig.defaultLocale,
    backend: {
      loadPath: path.resolve(process.cwd(), `lib/i18n/locales/${locale}/${ns}.json`)
    },
    initImmediate: false,
    interpolation: { escapeValue: false }
  })

  return (key: string) => i18nInstance.t(key)
}
