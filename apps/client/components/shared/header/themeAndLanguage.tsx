'use client'

import React, { useEffect, useRef, useState } from 'react'

import { Locale } from '~/lib/i18n/config'

import { ColorThemeSwitcher } from './colorThemeSwitcher'
import LanguageSwitcher from './langSwitcher'
import { Drop, IDropdownMenuTrigger } from './types'
interface IThemeAndLanguage {
  locale: Locale
}
export const ThemeAndLanguage: React.FC<IThemeAndLanguage> = ({ locale }) => {
  const [openDropdown, setOpenDropdown] = useState<Drop>(null)

  // refs to the actual DOM trigger elements (buttons)
  const themeTriggerRef = useRef<HTMLElement | null>(null)
  const langTriggerRef = useRef<HTMLElement | null>(null)

  // keep a ref to latest openDropdown to avoid stale closure in the handler
  const openRef = useRef<Drop>(openDropdown)
  useEffect(() => {
    openRef.current = openDropdown
  }, [openDropdown])

  useEffect(() => {
    const isPointInside = (el: HTMLElement | null, x: number, y: number) => {
      if (!el) return false
      const r = el.getBoundingClientRect()
      return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom
    }

    const handler = (e: PointerEvent) => {
      try {
        const path = (e.composedPath && (e.composedPath() as EventTarget[])) || []
        const x = e.clientX
        const y = e.clientY

        const clickedTheme =
          (themeTriggerRef.current &&
            (path.includes(themeTriggerRef.current) ||
              isPointInside(themeTriggerRef.current, x, y))) ??
          false
        const clickedLang =
          (langTriggerRef.current &&
            (path.includes(langTriggerRef.current) ||
              isPointInside(langTriggerRef.current, x, y))) ??
          false

        // If user clicked a trigger that's different from the currently open menu,
        // close current and open target in same interaction.
        if (openRef.current && clickedTheme && openRef.current !== IDropdownMenuTrigger.THEME) {
          // switch to theme
          setOpenDropdown(null)
          // next frame open the theme dropdown (gives Radix time to unmount the previous)
          requestAnimationFrame(() => setOpenDropdown(IDropdownMenuTrigger.THEME))
          // prevent default so Radix doesn't treat this as just a close
          e.preventDefault()
          return
        }

        if (openRef.current && clickedLang && openRef.current !== IDropdownMenuTrigger.LANGUAGE) {
          setOpenDropdown(null)
          requestAnimationFrame(() => setOpenDropdown(IDropdownMenuTrigger.LANGUAGE))
          e.preventDefault()
          return
        }

        // otherwise don't interfere — let Radix handle open/close normally.
      } catch (err) {
        // keep silent on errors — we don't want to break user interactions
        if (err && typeof err === 'object' && 'message' in err) {
          console.error((err as { message: string }).message || 'Error in dropdown handler', err)
        } else {
          console.error('Error in dropdown handler', err)
        }
      }
    }

    // capture: true so this runs before Radix's handlers
    document.addEventListener('pointerdown', handler, true)
    return () => document.removeEventListener('pointerdown', handler, true)
  }, [])
  return (
    <div className="flex items-center gap-4">
      <ColorThemeSwitcher
        triggerRef={themeTriggerRef}
        open={openDropdown === IDropdownMenuTrigger.THEME}
        onOpenChange={(isOpen) => setOpenDropdown(isOpen ? IDropdownMenuTrigger.THEME : null)}
      />
      <LanguageSwitcher
        triggerRef={langTriggerRef}
        locale={locale}
        open={openDropdown === IDropdownMenuTrigger.LANGUAGE}
        onOpenChange={(isOpen) => setOpenDropdown(isOpen ? IDropdownMenuTrigger.LANGUAGE : null)}
      />
    </div>
  )
}
