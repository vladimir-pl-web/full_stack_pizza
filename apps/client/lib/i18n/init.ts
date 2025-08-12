import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enCommon from '~/lib/i18n/locales/en/common.json'
import lvCommon from '~/lib/i18n/locales/lv/common.json'
import nlCommon from '~/lib/i18n/locales/nl/common.json'
import ruCommon from '~/lib/i18n/locales/ru/common.json'

const resources = {
  en: { common: enCommon },
  ru: { common: ruCommon },
  lv: { common: lvCommon },
  nl: { common: nlCommon }
}

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: 'en', // дефолт
    fallbackLng: 'en',
    ns: ['common'],
    defaultNS: 'common',
    interpolation: { escapeValue: false }
  })
}

export default i18n
