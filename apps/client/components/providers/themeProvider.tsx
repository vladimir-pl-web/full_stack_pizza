'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import * as React from 'react'
import { useEffect, useState } from 'react'
function Themes({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return <>{children}</> // or null to delay render

  return (
    <Themes attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </Themes>
  )
}
