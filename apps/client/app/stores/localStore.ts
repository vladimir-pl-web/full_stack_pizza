import { Locale } from '@workspace/types'
import { create } from 'zustand'

interface LocaleState {
  locale: Locale
  setLocale: (locale: Locale) => void
}

export const useLocaleStore = create<LocaleState>((set) => ({
  locale: 'en', // дефолтная локаль для гостей
  setLocale: (locale) => set({ locale })
}))

export const initializeLocale = (locale: Locale) => {
  useLocaleStore.setState({ locale })
}
