import { useCallback, useState } from 'react'

import { Drop } from '~/components/shared/header/types'

export function useDropdownSwitcher() {
  const [openDropdown, setOpenDropdown] = useState<Drop>(null)

  const handleTriggerPointerDown = useCallback(
    (dropdown: Drop) => {
      if (openDropdown && openDropdown !== dropdown) {
        // Close current, then open the next on the same click
        setOpenDropdown(null)
        requestAnimationFrame(() => setOpenDropdown(dropdown))
        return true // tell trigger to preventDefault
      }
      return false
    },
    [openDropdown]
  )

  const isOpen = useCallback((dropdown: Drop) => openDropdown === dropdown, [openDropdown])

  const toggleOpen = useCallback((dropdown: Drop, isOpen: boolean) => {
    setOpenDropdown(isOpen ? dropdown : null)
  }, [])

  return {
    openDropdown,
    isOpen,
    toggleOpen,
    handleTriggerPointerDown
  }
}
